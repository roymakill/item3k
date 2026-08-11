const IMG_ITEM = "items/";
const IMG_MONSTER = "boss/";
const PAGE_SIZE = 120;

const state = {
  view: "items",
  mode: localStorage.getItem("3kdb_mode") || "grid",
  items: [],
  monsters: [],
  filtered: [],
  saved: JSON.parse(localStorage.getItem("3kdb_saved") || "{}"),
};

const $ = (id) => document.getElementById(id);
const els = {
  status: $("statusText"),
  itemTab: $("itemTab"),
  monsterTab: $("monsterTab"),
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
  return `${row.name_th || ""} ${row.name || ""} ${row.real_id || ""} ${row.name_id || ""} ${row.code || ""}`.toLowerCase();
}

function imageUrl(row, type) {
  const icon = pad(row.icon || row.wid || row.real_id || row.name_id);
  return `${type === "monster" ? IMG_MONSTER : IMG_ITEM}${icon}.png`;
}

function saveKey(row) {
  return row.code || `${row.name_th}-${row.real_id || row.name_id}`;
}

function setActiveView(view) {
  state.view = view;
  for (const btn of [els.itemTab, els.monsterTab, els.favTab]) btn.classList.remove("active");
  ({ items: els.itemTab, monsters: els.monsterTab, fav: els.favTab }[view]).classList.add("active");
  const itemFilters = view !== "monsters";
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
  let rows = state.view === "monsters" ? state.monsters : state.items;
  if (state.view === "fav") {
    const keys = new Set(Object.keys(state.saved));
    rows = [...state.items, ...state.monsters].filter((row) => keys.has(saveKey(row)));
  }
  rows = rows.filter((row) => {
    const level = Number(row.level || 0);
    if (q && !textOf(row).includes(q)) return false;
    if (level < min || level > max) return false;
    if (state.view !== "monsters" && state.view !== "fav") {
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
  els.results.innerHTML = rows.map(cardHtml).join("") || `<div class="card">ไม่พบข้อมูล</div>`;
  if (state.filtered.length > PAGE_SIZE) {
    els.results.insertAdjacentHTML("beforeend", `<div class="card"><div class="name">แสดง ${PAGE_SIZE.toLocaleString()} รายการแรก</div><div class="meta">พิมพ์คำค้นหรือกรองข้อมูลเพิ่มเพื่อเจาะจงรายการ</div></div>`);
  }
  lucide.createIcons();
}

function cardHtml(row, index) {
  const type = state.monsters.includes(row) ? "monster" : "item";
  const key = saveKey(row);
  const name = row.name_th || row.name || row.code || "-";
  const sub = type === "monster" ? `Lv.${row.level || "-"} HP ${row.hp || "-"}` : `${row.sub_name || row.cat_name || "-"} #${row.real_id || row.name_id || "-"}`;
  const pills = type === "monster"
    ? [`EXP ${row.exp || "-"}`, `${(row.drops || []).length} drops`]
    : [`Lv.${row.level || "-"}`, `ซื้อ ${Number(row.cost || 0).toLocaleString()}`, `ขาย ${Number(row.sell || 0).toLocaleString()}`];
  return `<article class="card" data-index="${index}">
    <button class="save ${state.saved[key] ? "saved" : ""}" data-save="${index}" type="button" title="บันทึก"><i data-lucide="bookmark"></i></button>
    <div class="thumb"><img src="${imageUrl(row, type)}" alt="" loading="lazy" onerror="this.style.display='none'"></div>
    <div>
      <div class="name">${escapeHtml(name)}</div>
      <div class="meta">${escapeHtml(sub)}</div>
      <div class="pillrow">${pills.map((p) => `<span class="pill">${escapeHtml(p)}</span>`).join("")}</div>
    </div>
  </article>`;
}

function openDetail(row) {
  const type = state.monsters.includes(row) ? "monster" : "item";
  const stats = type === "monster" ? monsterStats(row) : itemStats(row);
  const drops = type === "monster" ? monsterDrops(row) : itemDrops(row);
  els.detail.innerHTML = `<div class="detail">
    <div class="detailHead">
      <div class="thumb"><img src="${imageUrl(row, type)}" alt="" onerror="this.style.display='none'"></div>
      <div>
        <h2>${escapeHtml(row.name_th || row.name || row.code || "-")}</h2>
        <div class="meta">${escapeHtml(row.code || "")}</div>
        <div class="pillrow">${headerPills(row, type).map((p) => `<span class="pill">${escapeHtml(p)}</span>`).join("")}</div>
      </div>
    </div>
    <div class="statgrid">${stats || `<div class="stat"><span>ไม่มีค่าสเตตัสใน cache</span></div>`}</div>
    ${drops ? `<h2 class="mt-5 text-lg">ดรอป / หาได้จาก</h2><div class="dropList">${drops}</div>` : ""}
  </div>`;
  els.dialog.showModal();
  lucide.createIcons();
}

function headerPills(row, type) {
  return type === "monster"
    ? [`Lv.${row.level || "-"}`, `HP ${row.hp || "-"}`, `DEF ${row.defense || "-"}`]
    : [`#${row.real_id || row.name_id || "-"}`, row.cat_name || "-", row.sub_name || "-"];
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

function monsterDrops(row) {
  return (row.drops || []).slice(0, 80).map((d) => `<div class="stat">
    <span>${escapeHtml(d.name || d.item_id || "-")} <small class="meta">#${escapeHtml(String(d.real_id || ""))}</small></span>
    <b class="accent">${escapeHtml(d.percent || String(d.rate || ""))}</b>
  </div>`).join("");
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
  const [items, monsters] = await Promise.all([
    fetch("data/items.json").then((r) => r.json()),
    fetch("data/monsters.json").then((r) => r.json()),
  ]);
  state.items = fixMojibake(items);
  state.monsters = fixMojibake(monsters);
  els.status.textContent = `โหลดแล้ว: Item ${state.items.length.toLocaleString()} / Monster ${state.monsters.length.toLocaleString()}`;
  populateFilters();
  setMode(state.mode);
  applyFilters();
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
