const IMG_ITEM = "items/";
const IMG_MONSTER = "boss/";
const PAGE_SIZE = 120;

const state = {
  view: "items",
  mode: localStorage.getItem("3kdb_mode") || "grid",
  items: [],
  monsters: [],
  maps: [],
  filtered: [],
  saved: JSON.parse(localStorage.getItem("3kdb_saved") || "{}"),
};

const $ = (id) => document.getElementById(id);
const els = {
  status: $("statusText"),
  itemTab: $("itemTab"),
  monsterTab: $("monsterTab"),
  mapTab: $("mapTab"),
  favTab: $("favTab"),
  search: $("searchInput"),
  cat: $("categoryFilter"),
  job: $("jobFilter"),
  sort: $("sortFilter"),
  min: $("minLevel"),
  max: $("maxLevel"),
  reset: $("resetBtn"),
  grid: $("gridBtn"),
  list: $("listBtn"),
  count: $("countText"),
  results: $("results"),
  dialog: $("detailDialog"),
  detail: $("detailContent"),
  close: $("closeDialog"),
};

const statMap = {
  add_attack_power: "ATK",
  add_magic_power: "MATK",
  add_defense: "DEF",
  add_magic_defense: "MDEF",
  attack_speed: "ASPD",
  add_weapon_hit: "HIT",
  add_dodge_rate: "DODGE",
  add_critical: "CRIT",
  add_hp: "HP",
  add_mp: "MP",
  weight: "น้ำหนัก",
};
const jobMap = {
  jobWARLORD: "ขุนพล",
  jobLEADER: "จอมยุทธ",
  jobADVISOR: "กุนซือ",
  jobWIZARD: "จอมเวทย์",
  jobASSASSIN: "องครักษ์",
  jobENGINEER: "จักรกล",
};
const elemMap = {
  skillAttr_SLASH: { name: "ฟัน", icon: "swords", cls: "elem-slate" },
  skillAttr_STING: { name: "แทง", icon: "crosshair", cls: "elem-rose" },
  skillAttr_BREAK: { name: "ทุบ", icon: "hammer", cls: "elem-orange" },
  skillAttr_ARROW: { name: "ธนู", icon: "bow-arrow", cls: "elem-lime" },
  skillAttr_FIRE: { name: "ไฟ", icon: "flame", cls: "elem-red" },
  skillAttr_WATER: { name: "น้ำ", icon: "droplets", cls: "elem-cyan" },
  skillAttr_GOD: { name: "เซียน", icon: "sun", cls: "elem-amber" },
  skillAttr_EVIL: { name: "มาร", icon: "moon", cls: "elem-violet" },
  skillAttr_NORMAL: { name: "ปกติ", icon: "circle-dot", cls: "elem-gray" },
  skillAttr_NONE: { name: "ไร้ธาตุ", icon: "circle", cls: "elem-gray" },
};

function pad(id) {
  const raw = String(id ?? "").trim();
  return /^\d+$/.test(raw) ? String(Number(raw)).padStart(4, "0") : raw;
}

function fixMojibake(value) {
  if (typeof value === "string") {
    if (!/[à-ÿ]/.test(value)) return value;
    const bytes = Uint8Array.from([...value].map((ch) => ch.charCodeAt(0) & 255));
    try { return new TextDecoder("utf-8").decode(bytes); } catch { return value; }
  }
  if (Array.isArray(value)) return value.map(fixMojibake);
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) value[key] = fixMojibake(value[key]);
  }
  return value;
}

function textOf(row) {
  return `${row.name_th || ""} ${row.name || ""} ${row.real_id || ""} ${row.name_id || ""} ${row.code || ""} ${(row.locations || []).map((l) => l.map).join(" ")} ${(row.monsters || []).join(" ")} ${(row.bosses || []).join(" ")}`.toLowerCase();
}

function imageUrl(row, type) {
  const icon = pad(row.icon || row.wid || row.real_id || row.name_id);
  return `${type === "monster" ? IMG_MONSTER : IMG_ITEM}${icon}.png`;
}

function saveKey(row) {
  return row.kind === "map" ? `map:${row.name}` : row.code || `${row.name_th}-${row.real_id || row.name_id}`;
}

function setActiveView(view) {
  state.view = view;
  for (const btn of [els.itemTab, els.monsterTab, els.mapTab, els.favTab]) btn.classList.remove("active");
  ({ items: els.itemTab, monsters: els.monsterTab, maps: els.mapTab, fav: els.favTab }[view]).classList.add("active");
  const itemFilters = view === "items";
  els.cat.disabled = !itemFilters;
  els.job.disabled = !itemFilters;
  applyFilters();
}

function setMode(mode) {
  state.mode = mode;
  localStorage.setItem("3kdb_mode", mode);
  els.results.className = `results ${mode}View`;
  els.grid.classList.toggle("active", mode === "grid");
  els.list.classList.toggle("active", mode === "list");
}

function populateFilters() {
  const cats = [...new Map(state.items.map((i) => [i.cat_key, i.cat_name]).filter(([k]) => k)).entries()];
  els.cat.innerHTML = `<option value="">หมวดหมู่ทั้งหมด</option>` + cats.map(([key, name]) => `<option value="${key}">${name}</option>`).join("");
  els.job.innerHTML = `<option value="">ทุกอาชีพ</option>` + Object.entries(jobMap).map(([key, name]) => `<option value="${key}">${name}</option>`).join("");
}

function applyFilters() {
  const q = els.search.value.trim().toLowerCase();
  const min = Number(els.min.value || 0);
  const max = Number(els.max.value || 9999);
  let rows = state.view === "monsters" ? state.monsters : state.view === "maps" ? state.maps : state.items;
  if (state.view === "fav") {
    const keys = new Set(Object.keys(state.saved));
    rows = [...state.items, ...state.monsters, ...state.maps].filter((row) => keys.has(saveKey(row)));
  }
  rows = rows.filter((row) => {
    const level = Number(row.level || 0);
    if (q && !textOf(row).includes(q)) return false;
    if (row.kind !== "map" && (level < min || level > max)) return false;
    if (state.view === "items") {
      if (els.cat.value && row.cat_key !== els.cat.value) return false;
      if (els.job.value && !(row.job || []).includes(els.job.value)) return false;
    }
    return true;
  });
  rows.sort(sorter(els.sort.value));
  state.filtered = rows;
  render();
}

function sorter(type) {
  const num = (row, key) => Number(String(row[key] || "0").replace(/,/g, ""));
  return {
    level_desc: (a, b) => num(b, "level") - num(a, "level"),
    level_asc: (a, b) => num(a, "level") - num(b, "level"),
    price_desc: (a, b) => num(b, "cost") - num(a, "cost"),
    price_asc: (a, b) => num(a, "cost") - num(b, "cost"),
  }[type] || (() => 0);
}

function render() {
  els.count.textContent = `${state.filtered.length.toLocaleString()} รายการ`;
  const rows = state.filtered.slice(0, PAGE_SIZE);
  els.results.classList.toggle("monsterResults", state.view === "monsters");
  els.results.innerHTML = rows.map(cardHtml).join("") || `<div class="card">ไม่พบข้อมูล</div>`;
  if (state.filtered.length > PAGE_SIZE) {
    els.results.insertAdjacentHTML("beforeend", `<div class="card"><div class="name">แสดง ${PAGE_SIZE.toLocaleString()} รายการแรก</div><div class="meta">พิมพ์คำค้นหรือกรองข้อมูลเพิ่มเพื่อเจาะจงรายการ</div></div>`);
  }
  lucide.createIcons();
}

function cardHtml(row, index) {
  const type = typeOf(row);
  if (type === "monster") return monsterCardHtml(row, index);
  const key = saveKey(row);
  const name = row.name_th || row.name || row.code || "-";
  const sub = type === "map" ? `${row.monsters.length.toLocaleString()} monster / ${row.bosses.length.toLocaleString()} boss` : type === "monster" ? `Lv.${row.level || "-"} HP ${row.hp || "-"}` : `${row.sub_name || row.cat_name || "-"} #${row.real_id || row.name_id || "-"}`;
  const pills = type === "map"
    ? [`รวม ${row.total.toLocaleString()} ตัว`, row.bosses.length ? "มี Boss" : "Monster"]
    : type === "monster"
    ? [`EXP ${row.exp || "-"}`, `${(row.drops || []).length} drops`]
    : [`Lv.${row.level || "-"}`, `ซื้อ ${Number(row.cost || 0).toLocaleString()}`, `ขาย ${Number(row.sell || 0).toLocaleString()}`];
  return `<article class="card" data-index="${index}">
    <button class="save ${state.saved[key] ? "saved" : ""}" data-save="${index}" type="button" title="บันทึก"><i data-lucide="bookmark"></i></button>
    ${type === "map" ? `<div class="thumb mapThumb"><i data-lucide="map"></i></div>` : `<div class="thumb ${type}Thumb"><img src="${imageUrl(row, type)}" alt="" loading="lazy" onerror="this.style.display='none'"></div>`}
    <div>
      <div class="name">${escapeHtml(name)}</div>
      <div class="meta">${escapeHtml(sub)}</div>
      <div class="pillrow">${pills.map((p) => `<span class="pill">${escapeHtml(p)}</span>`).join("")}</div>
    </div>
  </article>`;
}

function monsterCardHtml(row, index) {
  const key = saveKey(row);
  const name = row.name_th || row.name || row.code || "-";
  const hp = Number(row.hp || 0).toLocaleString();
  const atk = String(row.damage || "-").replace(",", " - ");
  const def = row.defense || "-";
  const drops = (row.drops || []).length;
  const locations = (row.locations || []).length;
  return `<article class="card monsterCard" data-index="${index}">
    <button class="save ${state.saved[key] ? "saved" : ""}" data-save="${index}" type="button" title="บันทึก"><i data-lucide="bookmark"></i></button>
    <div class="thumb monsterThumb"><img src="${imageUrl(row, "monster")}" alt="" loading="lazy" onerror="this.style.display='none'"></div>
    <div class="monsterName">${escapeHtml(name)}</div>
    <div class="monsterMeta">LV ${escapeHtml(row.level || "-")} HP ${hp}</div>
    <div class="monsterStats">
      <div><span>HP</span><b>${hp}</b></div>
      <div><span>ATK</span><b>${escapeHtml(atk)}</b></div>
      <div><span>DEF</span><b>${escapeHtml(def)}</b></div>
    </div>
    <div class="monsterFoot"><i data-lucide="map-pin"></i> เกิด ${locations.toLocaleString()} ที่ <span>•</span> <i data-lucide="gift"></i> ดรอป ${drops.toLocaleString()} รายการ</div>
  </article>`;
}

function openDetail(row) {
  const type = typeOf(row);
  const stats = type === "map" ? mapStats(row) : type === "monster" ? monsterStats(row) : itemStats(row);
  const elements = type === "map" ? "" : elementInfo(row, type);
  const locations = type === "monster" ? monsterLocations(row) : "";
  const drops = type === "map" ? mapMembers(row) : type === "monster" ? monsterDrops(row) : itemDrops(row);
  els.detail.innerHTML = `<div class="detail">
    <div class="detailHead">
      ${type === "map" ? `<div class="thumb mapThumb"><i data-lucide="map"></i></div>` : `<div class="thumb ${type}Thumb"><img src="${imageUrl(row, type)}" alt="" onerror="this.style.display='none'"></div>`}
      <div>
        <h2>${escapeHtml(row.name_th || row.name || row.code || "-")}</h2>
        <div class="meta">${escapeHtml(row.code || "")}</div>
        <div class="pillrow">${headerPills(row, type).map((p) => `<span class="pill">${escapeHtml(p)}</span>`).join("")}</div>
      </div>
    </div>
    <div class="statgrid">${stats || `<div class="stat"><span>ไม่มีค่าสเตตัสใน cache</span></div>`}</div>
    ${elements ? `<h2 class="mt-5 text-lg">Element Info</h2><div class="elementInfo">${elements}</div>` : ""}
    ${locations ? `<h2 class="mt-5 text-lg">สถานที่เกิด</h2><div class="locationList">${locations}</div>` : ""}
    ${drops ? `<h2 class="mt-5 text-lg">${type === "map" ? "รายชื่อในแผนที่" : "ดรอป / หาได้จาก"}</h2><div class="dropList">${drops}</div>` : ""}
  </div>`;
  els.dialog.showModal();
  lucide.createIcons();
}

function headerPills(row, type) {
  return type === "map"
    ? [`Monster ${row.monsters.length.toLocaleString()}`, `Boss ${row.bosses.length.toLocaleString()}`]
    : type === "monster"
    ? [`Lv.${row.level || "-"}`, `HP ${row.hp || "-"}`, `DEF ${row.defense || "-"}`]
    : [`#${row.real_id || row.name_id || "-"}`, row.cat_name || "-", row.sub_name || "-"];
}

function typeOf(row) {
  if (row.kind === "map") return "map";
  return state.monsters.includes(row) ? "monster" : "item";
}

function itemStats(row) {
  const parts = [];
  for (const [key, value] of Object.entries(row.stats || {})) {
    parts.push(`<div class="stat"><span>${escapeHtml(statMap[key] || key)}</span><b>${escapeHtml(String(value))}</b></div>`);
  }
  if (row.job?.length) parts.push(`<div class="stat"><span>อาชีพ</span><b>${row.job.map((j) => jobMap[j] || j).join(", ")}</b></div>`);
  parts.push(`<div class="stat"><span>ราคา</span><b><span class="accent">ซื้อ ${Number(row.cost || 0).toLocaleString()}</span> / <span class="green">ขาย ${Number(row.sell || 0).toLocaleString()}</span></b></div>`);
  return parts.join("");
}

function monsterStats(row) {
  return [
    ["Level", row.level], ["HP", row.hp], ["MP", row.mp], ["Damage", row.damage],
    ["Defense", row.defense], ["Attack Speed", row.attack_speed], ["EXP", row.exp],
    ["STR", row.stats?.STR], ["INT", row.stats?.INT], ["CON", row.stats?.CON], ["DEX", row.stats?.DEX], ["MIND", row.stats?.MIND],
  ].filter(([, v]) => v !== undefined && v !== "").map(([k, v]) => `<div class="stat"><span>${k}</span><b>${escapeHtml(String(v))}</b></div>`).join("");
}

function elementInfo(row, type) {
  const groups = normalizeElements(row, type);
  const sections = [];
  if (groups.atk.length) sections.push(elementSection("ธาตุโจมตี", "sword", groups.atk));
  if (groups.def.length) sections.push(elementSection("ธาตุป้องกัน", "shield", groups.def));
  return sections.join("");
}

function normalizeElements(row, type) {
  if (type === "monster") {
    return {
      atk: (row.elems?.atk || []).map((e) => ({ code: e.c, value: e.v })),
      def: (row.elems?.def || []).map((e) => ({ code: e.c, value: e.v })),
    };
  }
  const groups = { atk: [], def: [] };
  for (const elem of row.elems || []) {
    const key = String(elem.t || "").toUpperCase() === "DEF" ? "def" : "atk";
    groups[key].push({ code: elem.c, value: elem.v });
  }
  return groups;
}

function elementSection(title, icon, elems) {
  return `<section class="elementSection">
    <div class="elementTitle"><i data-lucide="${icon}"></i>${escapeHtml(title)}</div>
    <div class="elementGrid">${elems.map(elementChip).join("")}</div>
  </section>`;
}

function elementChip(elem) {
  const meta = elemMap[elem.code] || { name: elem.code || "-", icon: "circle-help", cls: "elem-gray" };
  const raw = String(elem.value ?? "");
  const value = raw && raw !== "0" ? `${raw}%` : raw || "-";
  return `<div class="elementChip ${meta.cls}">
    <i data-lucide="${meta.icon}"></i>
    <span>${escapeHtml(meta.name)}</span>
    <b>${escapeHtml(value)}</b>
  </div>`;
}

function monsterDrops(row) {
  return (row.drops || []).slice(0, 80).map((d) => `<div class="stat">
    <span>${escapeHtml(d.name || d.item_id || "-")} <small class="meta">#${escapeHtml(String(d.real_id || ""))}</small></span>
    <b class="accent">${escapeHtml(d.percent || String(d.rate || ""))}</b>
  </div>`).join("");
}

function monsterLocations(row) {
  const locations = row.locations || [];
  if (!locations.length) return "";
  return locations.slice(0, 120).map((loc) => `<div class="locationChip">
    <i data-lucide="${loc.type === "boss" ? "crown" : "map-pin"}"></i>
    <span>${escapeHtml(loc.map)}</span>
    <b>${loc.type === "boss" ? "Boss" : "Mob"}</b>
  </div>`).join("");
}

function mapStats(row) {
  return [
    ["Monster", row.monsters.length.toLocaleString()],
    ["Boss", row.bosses.length.toLocaleString()],
    ["รวม", row.total.toLocaleString()],
  ].map(([k, v]) => `<div class="stat"><span>${k}</span><b>${v}</b></div>`).join("");
}

function mapMembers(row) {
  const monsterRows = row.monsters.map((name) => `<div class="stat"><span>${escapeHtml(name)}</span><b>Monster</b></div>`);
  const bossRows = row.bosses.map((name) => `<div class="stat"><span>${escapeHtml(name)}</span><b class="accent">Boss</b></div>`);
  return [...bossRows, ...monsterRows].slice(0, 160).join("");
}

function itemDrops(row) {
  const code = row.code;
  const real = String(row.real_id || row.name_id || "");
  const matches = state.monsters.filter((mob) => (mob.drops || []).some((drop) =>
    drop.item_id === code || drop.code === code || String(drop.real_id || "") === real || drop.name === row.name_th
  ));
  return matches.slice(0, 80).map((mob) => {
    const drop = (mob.drops || []).find((d) => d.item_id === code || d.code === code || String(d.real_id || "") === real || d.name === row.name_th) || {};
    return `<div class="stat">
      <span>${escapeHtml(mob.name_th || mob.name || mob.code)} <small class="meta">Lv.${escapeHtml(String(mob.level || "-"))}</small></span>
      <b class="cyan">${escapeHtml(drop.percent || String(drop.rate || ""))}</b>
    </div>`;
  }).join("");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

async function loadData() {
  const [items, monsters, maps] = await Promise.all([
    fetch("data/items.json").then((r) => r.json()),
    fetch("data/monsters.json").then((r) => r.json()),
    fetch("data/maps.json").then((r) => r.json()),
  ]);
  const fixedMaps = fixMojibake(maps);
  state.items = fixMojibake(items);
  state.monsters = fixMojibake(monsters);
  hydrateMonsterLocations(state.monsters, fixedMaps);
  state.maps = buildMapRows(fixedMaps);
  els.status.textContent = `โหลดแล้ว: Item ${state.items.length.toLocaleString()} / Monster ${state.monsters.length.toLocaleString()} / Map ${state.maps.length.toLocaleString()}`;
  populateFilters();
  setMode(state.mode);
  applyFilters();
}

function hydrateMonsterLocations(monsters, data) {
  const byName = new Map();
  const byCode = new Map();
  const add = (key, entry, group) => {
    const rawKey = String(key || "").trim();
    const mapName = String(typeof entry === "string" ? entry : entry?.map || "").trim();
    if (!rawKey || !mapName) return;
    for (const part of rawKey.split(",").map((value) => value.trim()).filter(Boolean)) {
      const loc = { map: mapName, type: group === "bosses" ? "boss" : "mob" };
      if (part.startsWith("role_")) {
        if (!byCode.has(part)) byCode.set(part, []);
        byCode.get(part).push(loc);
      } else {
        if (!byName.has(part)) byName.set(part, []);
        byName.get(part).push(loc);
      }
    }
  };
  for (const group of ["monsters", "bosses"]) {
    for (const [monsterName, maps] of Object.entries(data[group] || {})) {
      for (const entry of maps || []) add(monsterName, entry, group);
    }
  }
  for (const monster of monsters) {
    const locations = [...(byName.get(monster.name_th) || []), ...(byCode.get(monster.code) || [])];
    const seen = new Set();
    monster.locations = locations.filter((loc) => {
      const key = `${loc.type}:${loc.map}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
}

function buildMapRows(data) {
  const byMap = new Map();
  const add = (mapName, monsterName, group) => {
    const name = String(mapName || "").trim();
    const monster = String(monsterName || "").trim();
    if (!name || !monster) return;
    if (!byMap.has(name)) byMap.set(name, { kind: "map", name, monsters: [], bosses: [], total: 0 });
    const row = byMap.get(name);
    const list = group === "bosses" ? row.bosses : row.monsters;
    if (!list.includes(monster)) list.push(monster);
  };
  for (const group of ["monsters", "bosses"]) {
    for (const [monsterName, maps] of Object.entries(data[group] || {})) {
      for (const entry of maps || []) add(typeof entry === "string" ? entry : entry.map, monsterName, group);
    }
  }
  return [...byMap.values()].map((row) => {
    row.monsters.sort((a, b) => a.localeCompare(b, "th"));
    row.bosses.sort((a, b) => a.localeCompare(b, "th"));
    row.total = row.monsters.length + row.bosses.length;
    return row;
  }).sort((a, b) => a.name.localeCompare(b.name, "th"));
}

els.results.addEventListener("click", (event) => {
  const saveBtn = event.target.closest("[data-save]");
  const card = event.target.closest(".card");
  if (!card) return;
  const row = state.filtered[Number(card.dataset.index)];
  if (!row) return;
  if (saveBtn) {
    const key = saveKey(row);
    if (state.saved[key]) delete state.saved[key];
    else state.saved[key] = { name: row.name_th || row.name || row.code, time: Date.now() };
    localStorage.setItem("3kdb_saved", JSON.stringify(state.saved));
    render();
    return;
  }
  openDetail(row);
});

[els.search, els.cat, els.job, els.sort, els.min, els.max].forEach((el) => el.addEventListener("input", applyFilters));
els.itemTab.addEventListener("click", () => setActiveView("items"));
els.monsterTab.addEventListener("click", () => setActiveView("monsters"));
els.mapTab.addEventListener("click", () => setActiveView("maps"));
els.favTab.addEventListener("click", () => setActiveView("fav"));
els.grid.addEventListener("click", () => setMode("grid"));
els.list.addEventListener("click", () => setMode("list"));
els.reset.addEventListener("click", () => {
  els.search.value = "";
  els.cat.value = "";
  els.job.value = "";
  els.sort.value = "default";
  els.min.value = "";
  els.max.value = "";
  applyFilters();
});
els.close.addEventListener("click", () => els.dialog.close());

loadData().catch((err) => {
  console.error(err);
  els.status.textContent = "โหลดข้อมูลไม่สำเร็จ กรุณาเปิดผ่าน local server";
});
