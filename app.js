const IMG_ITEM = "items/";
const IMG_MONSTER = "boss/";
const PAGE_SIZE = 20;
const IMMORTAL_90_BAG_ID = "7330";
const IMMORTAL_90_BAG_CONTENTS = [
  ["845", "4.00%"], ["421", "4.00%"], ["847", "7.00%"], ["1416", "7.00%"],
  ["1318", "2.00%"], ["1520", "2.00%"], ["1627", "6.00%"], ["1628", "8.00%"],
  ["1629", "10.50%"], ["39", "10.50%"], ["237", "10.50%"], ["1219", "11.00%"],
  ["1824", "1.00%"], ["1825", "10.50%"], ["40", "6.00%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const EXOTIC_MOUNT_BAG_ID = "7548";
const SPIRIT_SOLDIER_BAG_ID = "7559";
const SPIRIT_SOLDIER_BAG_CONTENTS = [
  ["6964", "7.4425%"], ["6965", "7.4425%"], ["6966", "7.4425%"], ["6967", "7.4425%"],
  ["6968", "7.4425%"], ["6969", "7.4425%"], ["6970", "7.4425%"], ["6971", "7.4425%"],
  ["6972", "7.4425%"], ["6973", "7.4420%"], ["6974", "7.4425%"], ["6975", "7.4415%"],
  ["6980", "7.4415%"], ["6976", "0.65%"], ["6977", "0.65%"], ["6978", "0.65%"],
  ["6979", "0.65%"], ["6981", "0.65%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const EXOTIC_MOUNT_BAG_CONTENTS = [
  ["4073", "14.00%"], ["4026", "12.00%"], ["4063", "12.00%"], ["4064", "12.00%"],
  ["4066", "12.00%"], ["4011", "12.00%"], ["4071", "12.00%"], ["9606", "14.00%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const ZODIAC_BAG_ID = "11851";
const ZODIAC_BAG_CONTENTS = [
  { real_id: "4439", name: "ยันต์วิญญาณ12นักษัตรชวด", percent: "1.00%" },
  { real_id: "4440", name: "ยันต์วิญญาณ12นักษัตรฉลู", percent: "1.00%" },
  { real_id: "4441", name: "ยันต์วิญญาณ12นักษัตรขาล", percent: "1.00%" },
  { real_id: "4442", name: "ยันต์วิญญาณ12นักษัตรเถาะ", percent: "4.00%" },
  { real_id: "4443", name: "ยันต์วิญญาณ12นักษัตรมะโรง", percent: "4.00%" },
  { real_id: "4444", name: "ยันต์วิญญาณ12นักษัตรมะเส็ง", percent: "1.00%" },
  { real_id: "4445", name: "ยันต์วิญญาณ12นักษัตรมะเมีย", percent: "4.00%" },
  { real_id: "4446", name: "ยันต์วิญญาณ12นักษัตรมะแม", percent: "20.00%" },
  { real_id: "4447", name: "ยันต์วิญญาณ12นักษัตรวอก", percent: "4.00%" },
  { real_id: "4448", name: "ยันต์วิญญาณ12นักษัตรระกา", percent: "20.00%" },
  { real_id: "4449", name: "ยันต์วิญญาณ12นักษัตรจอ", percent: "20.00%" },
  { real_id: "4450", name: "ยันต์วิญญาณ12นักษัตรกุน", percent: "20.00%" },
];

const SALARY_BAG_ID = "5593";
const SALARY_BAG_4_ID = "5594";
const SALARY_BAG_1_ID = "5591";
const SALARY_BAG_2_ID = "5592";
const SALARY_BAG_5_ID = "5595";
const SALARY_BAG_6_ID = "5596";
const SALARY_BAG_7_ID = "5597";
const SALARY_BAG_8_ID = "5598";
const SALARY_BAG_1_CONTENTS = [
  ["9825", "4.00%"], ["9826", "4.00%"], ["9827", "4.00%"], ["9976", "4.00%"],
  ["9817", "4.00%"], ["9818", "4.00%"], ["5790", "4.00%"], ["5785", "4.00%"],
  ["7585", "3.00%"], ["7586", "3.00%"], ["7519", "3.00%"], ["7518", "3.00%"],
  ["5411", "2.00%"], ["5569", "2.00%"], ["5416", "2.00%"], ["5410", "2.00%"],
  ["3209", "2.00%"], ["3215", "2.00%"], ["3006", "2.00%"], ["3007", "2.00%"],
  ["4055", "2.00%"], ["4076", "2.00%"], ["3815", "1.00%"], ["3816", "1.00%"],
  ["3817", "1.00%"], ["3818", "1.00%"], ["4046", "0.25%"], ["4047", "0.25%"],
  ["4029", "0.25%"], ["4070", "0.25%"], ["4071", "0.25%"], ["4072", "0.25%"],
  ["4073", "0.25%"], ["5192", "0.25%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const SALARY_BAG_2_CONTENTS = [
  ["9825", "4.00%"], ["9826", "4.00%"], ["9827", "4.00%"], ["9976", "4.00%"],
  ["9817", "4.00%"], ["9818", "4.00%"], ["5790", "4.00%"], ["5785", "4.00%"],
  ["7585", "3.00%"], ["7586", "3.00%"], ["7519", "3.00%"], ["7518", "3.00%"],
  ["5411", "2.00%"], ["5569", "2.00%"], ["5416", "2.00%"], ["5410", "2.00%"],
  ["3209", "2.00%"], ["3215", "2.00%"], ["3006", "2.00%"], ["3007", "2.00%"],
  ["4055", "2.00%"], ["4076", "2.00%"], ["3815", "1.00%"], ["3816", "1.00%"],
  ["3817", "1.00%"], ["3818", "1.00%"], ["4046", "0.25%"], ["4047", "0.25%"],
  ["4029", "0.25%"], ["4070", "0.25%"], ["4071", "0.25%"], ["4072", "0.25%"],
  ["4073", "0.25%"], ["5192", "0.25%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const SALARY_BAG_CONTENTS = [
  ["9825", "4.00%"], ["9826", "4.00%"], ["9827", "4.00%"], ["9976", "4.00%"],
  ["9817", "4.00%"], ["9818", "4.00%"], ["5790", "4.00%"], ["5785", "4.00%"],
  ["7585", "3.00%"], ["7586", "3.00%"], ["7519", "3.00%"], ["7518", "3.00%"],
  ["5411", "2.00%"], ["5569", "2.00%"], ["5416", "2.00%"], ["5410", "2.00%"],
  ["3209", "2.00%"], ["3215", "2.00%"], ["3006", "2.00%"], ["3007", "2.00%"],
  ["4055", "2.00%"], ["4076", "2.00%"], ["3815", "1.00%"], ["3816", "1.00%"],
  ["3817", "1.00%"], ["3818", "1.00%"], ["4046", "0.25%"], ["4047", "0.25%"],
  ["4029", "0.25%"], ["4070", "0.25%"], ["4071", "0.25%"], ["4072", "0.25%"],
  ["4073", "0.25%"], ["5192", "0.25%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const SALARY_BAG_4_CONTENTS = [
  ["9825", "4.00%"], ["9826", "4.00%"], ["9827", "4.00%"], ["9976", "4.00%"],
  ["9817", "4.00%"], ["9818", "4.00%"], ["5790", "4.00%"], ["5785", "4.00%"],
  ["7585", "3.00%"], ["7586", "3.00%"], ["7519", "3.00%"], ["7518", "3.00%"],
  ["5411", "2.00%"], ["5569", "2.00%"], ["5416", "2.00%"], ["5410", "2.00%"],
  ["3209", "2.00%"], ["3215", "2.00%"], ["3006", "2.00%"], ["3007", "2.00%"],
  ["4055", "2.00%"], ["4076", "2.00%"],
  ["3815", "1.00%"], ["3816", "1.00%"], ["3817", "1.00%"], ["3818", "1.00%"],
  ["4046", "0.25%"], ["4047", "0.25%"], ["4029", "0.25%"], ["4070", "0.25%"],
  ["4071", "0.25%"], ["4072", "0.25%"], ["4073", "0.25%"], ["5192", "0.25%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const SALARY_BAG_5_CONTENTS = [
  ["9825", "4.00%"], ["9826", "4.00%"], ["9827", "4.00%"], ["9976", "4.00%"],
  ["9817", "4.00%"], ["9818", "4.00%"], ["5790", "4.00%"], ["5785", "4.00%"],
  ["7585", "3.00%"], ["7586", "3.00%"], ["7519", "3.00%"], ["7518", "3.00%"],
  ["3209", "2.50%"], ["3215", "2.50%"], ["3006", "2.50%"], ["3007", "2.50%"],
  ["3804", "2.00%"], ["3806", "2.00%"], ["3807", "2.00%"], ["3809", "2.00%"],
  ["4055", "2.00%"], ["4076", "2.00%"],
  ["3815", "0.70%"], ["3816", "0.70%"], ["3817", "0.70%"], ["3818", "0.70%"],
  ["4050", "0.25%"], ["4052", "0.25%"], ["4054", "0.25%"], ["4042", "0.25%"],
  ["5192", "0.20%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const SALARY_BAG_6_CONTENTS = [
  ["5007", "5.00%"], ["5003", "4.00%"], ["5008", "3.00%"], ["5031", "5.00%"],
  ["5032", "3.50%"], ["5413", "3.00%"], ["5414", "1.00%"], ["5028", "5.00%"],
  ["7590", "0.10%"], ["7589", "0.10%"], ["7501", "1.00%"], ["7502", "1.00%"],
  ["5752", "0.50%"], ["5790", "0.50%"], ["5737", "0.50%"],
  ["2492", "3.00%"], ["2458", "3.00%"], ["2431", "3.00%"],
  ["3802", "1.00%"], ["4017", "1.00%"], ["4006", "1.00%"], ["4018", "1.00%"],
  ["3605", "2.00%"], ["2449", "2.00%"], ["2451", "2.00%"], ["2464", "2.00%"],
  ["2465", "2.00%"], ["2671", "2.00%"], ["2674", "2.00%"], ["2675", "2.00%"],
  ["2677", "2.00%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const SALARY_BAG_7_CONTENTS = [
  ["5056", "5.00%"], ["5045", "5.00%"], ["5007", "5.00%"], ["5089", "6.00%"],
  ["5032", "5.00%"], ["5413", "3.00%"], ["5414", "1.00%"],
  ["7590", "0.10%"], ["7589", "0.10%"], ["7501", "1.00%"], ["7502", "1.00%"],
  ["5006", "11.00%"], ["5028", "3.00%"], ["5027", "3.00%"],
  ["5751", "0.50%"], ["5754", "0.50%"],
  ["442", "3.00%"], ["1001", "3.00%"], ["2428", "3.00%"], ["2473", "3.00%"],
  ["2819", "3.00%"], ["3802", "1.00%"], ["4016", "1.00%"], ["4005", "3.00%"],
  ["4006", "1.00%"], ["3613", "3.00%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const SALARY_BAG_8_CONTENTS = [
  ["5006", "6.00%"], ["5032", "5.00%"], ["5031", "6.00%"], ["7589", "5.00%"],
  ["5028", "3.50%"], ["5027", "4.00%"], ["7501", "1.00%"], ["7502", "1.00%"],
  ["5736", "0.50%"], ["13", "5.00%"], ["3805", "5.00%"], ["2632", "5.00%"],
  ["2727", "5.00%"], ["2446", "5.00%"], ["2456", "5.00%"], ["2423", "5.00%"],
  ["2817", "5.00%"], ["4013", "1.00%"], ["4014", "1.00%"], ["4016", "1.00%"],
  ["3602", "5.00%"],
].map(([real_id, percent]) => ({ real_id, percent }));
const BAG_CONTENTS = {
  [IMMORTAL_90_BAG_ID]: IMMORTAL_90_BAG_CONTENTS,
  [SPIRIT_SOLDIER_BAG_ID]: SPIRIT_SOLDIER_BAG_CONTENTS,
  [EXOTIC_MOUNT_BAG_ID]: EXOTIC_MOUNT_BAG_CONTENTS,
  [SALARY_BAG_1_ID]: SALARY_BAG_1_CONTENTS,
  [SALARY_BAG_2_ID]: SALARY_BAG_2_CONTENTS,
  [ZODIAC_BAG_ID]: ZODIAC_BAG_CONTENTS,
  [SALARY_BAG_ID]: SALARY_BAG_CONTENTS,
  [SALARY_BAG_4_ID]: SALARY_BAG_4_CONTENTS,
  [SALARY_BAG_5_ID]: SALARY_BAG_5_CONTENTS,
  [SALARY_BAG_6_ID]: SALARY_BAG_6_CONTENTS,
  [SALARY_BAG_7_ID]: SALARY_BAG_7_CONTENTS,
  [SALARY_BAG_8_ID]: SALARY_BAG_8_CONTENTS,
};
const BAG_GOLD = {
  [SALARY_BAG_1_ID]: "55,000 - 65,000",
  [SALARY_BAG_2_ID]: "45,000 - 60,000",
  [SALARY_BAG_ID]: "35,000 - 55,000",
  [SALARY_BAG_4_ID]: "30,000 - 50,000",
  [SALARY_BAG_5_ID]: "25,000 - 45,000",
  [SALARY_BAG_6_ID]: "20,000 - 40,000",
  [SALARY_BAG_7_ID]: "15,000 - 35,000",
  [SALARY_BAG_8_ID]: "10,000 - 30,000",
};
const BAG_EMPTY_CHANCE = {
  [SALARY_BAG_1_ID]: "30.00%",
  [SALARY_BAG_2_ID]: "30.00%",
  [SALARY_BAG_ID]: "30.00%",
  [SALARY_BAG_4_ID]: "30.00%",
  [SALARY_BAG_5_ID]: "30.00%",
  [SALARY_BAG_6_ID]: "30.00%",
  [SALARY_BAG_7_ID]: "20.00%",
  [SALARY_BAG_8_ID]: "20.00%",
};
const SALARY_BAG_DROP_IDS = {
  [SALARY_BAG_1_ID]: "2016",
  [SALARY_BAG_2_ID]: "2017",
  [SALARY_BAG_ID]: "2018",
  [SALARY_BAG_4_ID]: "2019",
  [SALARY_BAG_5_ID]: "2020",
  [SALARY_BAG_6_ID]: "2021",
  [SALARY_BAG_7_ID]: "2022",
  [SALARY_BAG_8_ID]: "2023",
};
const CODEX_BAG_DROP_IDS = {
  [IMMORTAL_90_BAG_ID]: "2422",
  ...SALARY_BAG_DROP_IDS,
  [EXOTIC_MOUNT_BAG_ID]: "2319",
  [SPIRIT_SOLDIER_BAG_ID]: "2452",
};
const BAG_REWARD_TYPES = {
  [IMMORTAL_90_BAG_ID]: { icon: "swords", name: "อาวุธ" },
  [EXOTIC_MOUNT_BAG_ID]: { icon: "footprints", name: "พาหนะ" },
  [SPIRIT_SOLDIER_BAG_ID]: { icon: "shield", name: "ป้ายทหาร" },
};

const state = {
  view: "items",
  mode: localStorage.getItem("3kdb_mode") || "grid",
  page: 1,
  items: [],
  monsters: [],
  maps: [],
  filtered: [],
  saved: JSON.parse(localStorage.getItem("3kdb_saved") || "{}"),
};

const codex = { row: null, query: "", sort: "rate_desc", page: 1 };

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
  skillAttr_FIRE: { name: "ไฟ", icon: "flame", cls: "text-red-400" },
  skillAttr_WATER: { name: "น้ำ", icon: "droplet", cls: "text-sky-400" },
  skillAttr_SLASH: { name: "สะบั้น", icon: "sword", cls: "text-emerald-300" },
  skillAttr_STING: { name: "แทง", icon: "navigation", cls: "text-amber-200" },
  skillAttr_BREAK: { name: "สับ", icon: "axe", cls: "text-orange-300" },
  skillAttr_ARROW: { name: "ยิง", icon: "crosshair", cls: "text-teal-300" },
  skillAttr_GOD: { name: "เซียน", icon: "sun", cls: "text-yellow-300" },
  skillAttr_EVIL: { name: "มาร", icon: "moon", cls: "text-fuchsia-300" },
  skillAttr_NONE: { name: "ไร้ธาตุ", icon: "circle", cls: "text-gray-400" },
  skillAttr_NORMAL: { name: "ปกติ", icon: "circle-dot", cls: "text-gray-300" },
};
const elemMainMap = {
  0: { name: "ไร้ธาตุ", icon: "circle", cls: "text-slate-300", weak: "-" },
  1: { name: "ดิน", icon: "mountain", cls: "text-amber-300", weak: "ลม (Wind)" },
  2: { name: "น้ำ", icon: "droplet", cls: "text-sky-300", weak: "ดิน (Earth)" },
  3: { name: "ไฟ", icon: "flame", cls: "text-red-400", weak: "น้ำ (Water)" },
  4: { name: "ลม", icon: "wind", cls: "text-emerald-300", weak: "ไฟ (Fire)" },
};
const manualMonsterLocations = {};

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
  return `${row.name_th || ""} ${row.name || ""} ${row.real_id || ""} ${row.name_id || ""} ${row.code || ""} ${(row.drops || []).map((d) => d.name || d.item_id || "").join(" ")} ${(row.locations || []).map((l) => l.map).join(" ")} ${(row.monsters || []).join(" ")} ${(row.bosses || []).join(" ")}`.toLowerCase();
}

function imageUrl(row, type) {
  const icon = pad(row.icon || row.wid || row.real_id || row.name_id);
  return `${type === "monster" ? IMG_MONSTER : IMG_ITEM}${icon}.png`;
}

function imageError(row, type) {
  if (type !== "item") return "this.style.display='none'";
  const icon = pad(row.icon || row.real_id || row.name_id);
  return `fallbackItemImage(this,'${escapeHtml(icon)}')`;
}

function imageEvents(row, type) {
  if (type === "monster") return `onerror="this.style.display='none'"`;
  return `onerror="${imageError(row, type)}"`;
}

function fallbackItemImage(img, icon) {
  const step = Number(img.dataset.fallbackStep || 0);
  img.dataset.fallbackStep = String(step + 1);
  if (step === 0) {
    img.src = `${IMG_ITEM}${icon}f.png`;
    return;
  }
  if (step === 1) {
    img.src = `${IMG_ITEM}${icon}m.png`;
    return;
  }
  img.style.display = "none";
}

function saveKey(row) {
  return row.kind === "map" ? `map:${row.name}` : row.code || `${row.name_th}-${row.real_id || row.name_id}`;
}

function setActiveView(view) {
  state.view = view;
  state.page = 1;
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
  state.page = 1;
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

function pageNumbers(current, total) {
  if (total <= 12) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, 2, total - 1, total, current - 2, current - 1, current, current + 1, current + 2]);
  const nums = [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);
  const result = [];
  for (const page of nums) {
    if (result.length && page - result[result.length - 1] > 1) result.push("...");
    result.push(page);
  }
  return result;
}

function paginationHtml(totalPages) {
  if (totalPages <= 1) return "";
  const pages = pageNumbers(state.page, totalPages).map((page) => {
    if (page === "...") return `<span class="pageDots">...</span>`;
    return `<button class="pageBtn ${page === state.page ? "active" : ""}" type="button" data-page="${page}">${page}</button>`;
  }).join("");
  return `<nav class="pagination" aria-label="หน้า">
    <button class="pageBtn" type="button" data-page="${state.page - 1}" ${state.page <= 1 ? "disabled" : ""}>ก่อนหน้า</button>
    ${pages}
    <button class="pageBtn" type="button" data-page="${state.page + 1}" ${state.page >= totalPages ? "disabled" : ""}>ถัดไป</button>
  </nav>`;
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
  document.querySelector(".pagination")?.remove();
  const totalPages = Math.max(1, Math.ceil(state.filtered.length / PAGE_SIZE));
  state.page = Math.min(Math.max(1, state.page), totalPages);
  const start = (state.page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  els.count.textContent = `${state.filtered.length.toLocaleString()} รายการ • หน้า ${state.page.toLocaleString()} / ${totalPages.toLocaleString()}`;
  const rows = state.filtered.slice(start, end);
  els.results.classList.toggle("monsterResults", state.view === "monsters");
  els.results.innerHTML = rows.map((row, index) => cardHtml(row, start + index)).join("") || `<div class="card">ไม่พบข้อมูล</div>`;
  els.results.insertAdjacentHTML("afterend", paginationHtml(totalPages));
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
    ${type === "map" ? `<div class="thumb mapThumb"><i data-lucide="map"></i></div>` : `<div class="thumb ${type}Thumb"><img src="${imageUrl(row, type)}" alt="" loading="lazy" ${imageEvents(row, type)}></div>`}
    <div>
      <div class="name">${escapeHtml(name)}</div>
      <div class="meta">${escapeHtml(sub)}</div>
      <div class="pillrow">${pills.map((p) => `<span class="pill">${escapeHtml(p)}</span>`).join("")}</div>
      ${type === "item" ? `<div class="itemLevel">Lv <strong>${escapeHtml(String(row.level ?? "-"))}</strong></div>` : ""}
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
    <div class="thumb monsterThumb"><img src="${imageUrl(row, "monster")}" alt="" loading="lazy" ${imageEvents(row, "monster")}></div>
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
  const isCodex = type === "item" && Boolean(CODEX_BAG_DROP_IDS[String(row.real_id)]);
  els.dialog.classList.toggle("salaryCodexDialog", isCodex);
  els.dialog.scrollTop = 0;
  if (isCodex) {
    Object.assign(codex, { row, query: "", sort: "rate_desc", page: 1 });
    els.detail.innerHTML = salaryCodexDetail(row);
    renderCodexResults();
    if (!els.dialog.open) els.dialog.showModal();
    lucide.createIcons();
    return;
  }
  if (type === "monster") {
    els.detail.innerHTML = monsterDetail(row);
    els.dialog.showModal();
    lucide.createIcons();
    return;
  }
  const stats = type === "map" ? mapStats(row) : type === "monster" ? monsterStats(row) : itemStats(row);
  const elements = type === "map" ? "" : elementInfo(row, type);
  const locations = type === "monster" ? monsterLocations(row) : "";
  const bagContents = type === "item" ? itemBagContents(row) : "";
  const drops = type === "map" ? mapMembers(row) : type === "monster" ? monsterDrops(row) : itemDrops(row);
  els.detail.innerHTML = `<div class="detail">
    <div class="detailHead">
      ${type === "map" ? `<div class="thumb mapThumb"><i data-lucide="map"></i></div>` : `<div class="thumb ${type}Thumb"><img src="${imageUrl(row, type)}" alt="" ${imageEvents(row, type)}></div>`}
      <div>
        <h2>${escapeHtml(row.name_th || row.name || row.code || "-")}</h2>
        <div class="meta">${escapeHtml(row.code || "")}</div>
        <div class="pillrow">${headerPills(row, type).map((p) => `<span class="pill">${escapeHtml(p)}</span>`).join("")}</div>
      </div>
    </div>
    <div class="statgrid">${stats || `<div class="stat"><span>ไม่มีค่าสเตตัสใน cache</span></div>`}</div>
    ${elements}
    ${locations ? `<h2 class="mt-5 text-lg">สถานที่เกิด</h2><div class="locationList">${locations}</div>` : ""}
    ${bagContents ? `<h2 class="mt-5 text-lg">ไอเทมดรอปในถุง</h2><div class="dropList bagContentList">${bagContents}</div>` : ""}
    ${drops ? `<h2 class="mt-5 text-lg">${dropHeading(type)}</h2><div class="dropList">${drops}</div>` : ""}
  </div>`;
  els.dialog.showModal();
  lucide.createIcons();
}

function codexEntries(row = codex.row) {
  return BAG_CONTENTS[String(row.real_id)].map((entry) => ({
    ...entry,
    item: state.items.find((item) => String(item.real_id) === entry.real_id),
  })).filter((entry) => entry.item);
}

function bagRateTotal(real) {
  const rates = BAG_CONTENTS[real].reduce((sum, entry) => sum + Math.round(parseFloat(entry.percent) * 1000000), 0);
  return (rates + Math.round(parseFloat(BAG_EMPTY_CHANCE[real] || "0") * 1000000)) / 1000000;
}

function codexItemImage(item, className = "") {
  return `<img class="${className}" src="${escapeHtml(imageUrl(item, "item"))}" alt="${escapeHtml(item.name_th || item.code)}" ${imageEvents(item, "item")}>`;
}

function salaryCodexDetail(row) {
  const real = String(row.real_id);
  const contents = BAG_CONTENTS[real];
  const total = bagRateTotal(real);
  const rare = codexEntries(row).sort((a, b) => parseFloat(a.percent) - parseFloat(b.percent)
    || Number(b.item.cat_key === "CAT_MOUNT") - Number(a.item.cat_key === "CAT_MOUNT"))
    .slice(0, 3);
  const saved = Boolean(state.saved[saveKey(row)]);
  return `<article class="salaryCodex" aria-labelledby="codexTitle">
    <div class="codexMasthead"><span>3K <b>DATA DB</b></span><span class="codexMastheadLabel">คลังไอเทม</span></div>
    <div class="codexBreadcrumb"><i data-lucide="box"></i><span>ไอเทม</span><span>/</span><span>ถุงโชคดี</span><span>/</span><span>${escapeHtml(row.name_th)}</span></div>
    <header class="codexHero">
      <div class="codexPortrait">${codexItemImage(row)}</div>
      <div class="codexIdentity">
        <div class="codexTitleLine"><h2 id="codexTitle">${escapeHtml(row.name_th)}</h2><button type="button" class="codexIconButton" id="codexSave" data-codex-save aria-pressed="${saved}" title="${saved ? "นำออกจากบันทึก" : "บันทึกไอเทม"}" aria-label="${saved ? "นำออกจากบันทึก" : "บันทึกไอเทม"}"><i data-lucide="${saved ? "bookmark-check" : "bookmark"}"></i></button></div>
        <div class="codexSubtitle">ถุงโชคดี <span>|</span> ID ${escapeHtml(row.real_id)}</div>
        <dl class="codexMetrics">
          ${BAG_GOLD[real]
            ? `<div><i data-lucide="coins"></i><dt>เงินในกล่อง</dt><dd>${BAG_GOLD[real]}</dd></div>`
            : `<div><i data-lucide="${BAG_REWARD_TYPES[real].icon}"></i><dt>ประเภทรางวัล</dt><dd>${BAG_REWARD_TYPES[real].name}</dd></div>`}
          <div><i data-lucide="package-open"></i><dt>ไอเทม</dt><dd>${contents.length} รายการ</dd></div>
          ${BAG_EMPTY_CHANCE[real]
            ? `<div><i data-lucide="dices"></i><dt>Nothing</dt><dd>${BAG_EMPTY_CHANCE[real]}</dd></div>`
            : `<div><i data-lucide="chart-no-axes-combined"></i><dt>รวมอัตราดรอป</dt><dd>${total.toFixed(2)}%</dd></div>`}
        </dl>
      </div>
    </header>
    <div class="codexTabs" role="tablist" aria-label="รายละเอียดกล่อง">
      <button type="button" id="codexContentsTab" role="tab" aria-controls="codexContentsPanel" aria-selected="true" data-codex-tab="contents">ไอเทมในกล่อง <span>${contents.length}</span></button>
      <button type="button" id="codexSourcesTab" role="tab" aria-controls="codexSourcesPanel" aria-selected="false" tabindex="-1" data-codex-tab="sources">แหล่งดรอป</button>
    </div>
    <section id="codexContentsPanel" class="codexLayout" role="tabpanel" aria-labelledby="codexContentsTab">
      <div class="codexInventory">
        <div class="codexTools"><h3>ไอเทมในกล่อง</h3><div class="codexControls">
          <label class="codexSearch"><i data-lucide="search"></i><input id="codexSearch" type="search" placeholder="ค้นหาไอเทม" aria-label="ค้นหาไอเทมในกล่อง" autocomplete="off"></label>
          <select id="codexSort" aria-label="เรียงไอเทมในกล่อง"><option value="rate_desc">อัตราสูงสุด</option><option value="rate_asc">อัตราต่ำสุด</option><option value="name">ชื่อไอเทม</option></select>
        </div></div>
        <div id="codexResults"></div>
      </div>
      <aside class="codexRare" aria-labelledby="codexRareTitle"><h3 id="codexRareTitle">ไอเทมอัตราต่ำ</h3>${rare.map(({ item, percent }) => `<button type="button" class="codexRareItem" data-codex-item="${escapeHtml(item.real_id)}">${codexItemImage(item)}<span><b>${escapeHtml(item.name_th)}</b><small>${escapeHtml(item.cat_name)}</small><strong>${percent}</strong></span><i data-lucide="chevron-right"></i></button>`).join("")}
        <dl class="codexLedger">${BAG_EMPTY_CHANCE[real] ? `<div><dt>Nothing</dt><dd>${BAG_EMPTY_CHANCE[real]}</dd></div>` : ""}<div><dt>รวมอัตราตามไฟล์</dt><dd>${total.toFixed(2)}%</dd></div></dl>
      </aside>
    </section>
    <section id="codexSourcesPanel" class="codexSources" role="tabpanel" aria-labelledby="codexSourcesTab" hidden><h3>แหล่งดรอป</h3><div class="dropList">${itemDrops(row)}</div></section>
    <footer class="codexFooter"><span><i data-lucide="scroll-text"></i> DROP ID ${CODEX_BAG_DROP_IDS[real]}</span><span>${escapeHtml(row.name_th)} <span class="codexFooterDot">/</span> #${escapeHtml(real)}</span></footer>
  </article>`;
}

function renderCodexResults() {
  const query = codex.query.trim().toLocaleLowerCase("th");
  const entries = codexEntries().filter(({ item }) => `${item.name_th} ${item.real_id} ${item.code}`.toLocaleLowerCase("th").includes(query));
  entries.sort((a, b) => codex.sort === "name" ? a.item.name_th.localeCompare(b.item.name_th, "th")
    : (parseFloat(a.percent) - parseFloat(b.percent)) * (codex.sort === "rate_asc" ? 1 : -1));
  const pageSize = 8;
  const pages = Math.max(1, Math.ceil(entries.length / pageSize));
  codex.page = Math.min(Math.max(1, codex.page), pages);
  const start = (codex.page - 1) * pageSize;
  const rows = entries.slice(start, start + pageSize);
  $("codexResults").innerHTML = `<table class="codexTable"><thead><tr><th scope="col">ไอเทม</th><th scope="col" class="codexCategory">ประเภท</th><th scope="col">โอกาสได้รับ</th></tr></thead><tbody>${rows.map(({ item, percent }) => `<tr>
    <td><button type="button" class="codexItemLink" data-codex-item="${escapeHtml(item.real_id)}">${codexItemImage(item)}<span>${escapeHtml(item.name_th)}<small>ID ${escapeHtml(item.real_id)}</small></span></button></td>
    <td class="codexCategory">${escapeHtml(item.cat_name)}</td><td><div class="codexProbability"><strong>${percent}</strong><span class="codexRateTrack" aria-hidden="true"><span style="width:${parseFloat(percent)}%"></span></span></div></td>
  </tr>`).join("") || `<tr><td colspan="3" class="codexEmpty"><i data-lucide="search-x"></i>ไม่พบไอเทม</td></tr>`}</tbody></table>
  <div class="codexPagination"><span role="status">${entries.length ? start + 1 : 0}–${Math.min(start + pageSize, entries.length)} / ${entries.length} รายการ</span><nav aria-label="หน้าไอเทมในกล่อง">
    <button type="button" class="codexIconButton" data-codex-page="${codex.page - 1}" ${codex.page === 1 ? "disabled" : ""} title="หน้าก่อน" aria-label="หน้าก่อน"><i data-lucide="chevron-left"></i></button>
    ${Array.from({ length: pages }, (_, i) => `<button type="button" data-codex-page="${i + 1}" ${codex.page === i + 1 ? 'aria-current="page"' : ""} aria-label="หน้า ${i + 1}">${i + 1}</button>`).join("")}
    <button type="button" class="codexIconButton" data-codex-page="${codex.page + 1}" ${codex.page === pages ? "disabled" : ""} title="หน้าถัดไป" aria-label="หน้าถัดไป"><i data-lucide="chevron-right"></i></button>
  </nav></div>`;
  lucide.createIcons();
}

function setCodexTab(tab) {
  for (const button of els.detail.querySelectorAll("[data-codex-tab]")) {
    const selected = button.dataset.codexTab === tab;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  }
  $("codexContentsPanel").hidden = tab !== "contents";
  $("codexSourcesPanel").hidden = tab !== "sources";
}

function monsterDetail(row) {
  const locations = monsterLocations(row);
  const elements = elementInfo(row, "monster");
  const skills = monsterSkills(row);
  return `<div class="detail monsterDetail">
    <div class="monsterDetailHead">
      <div class="monsterPortrait"><img src="${imageUrl(row, "monster")}" alt="" ${imageEvents(row, "monster")}></div>
      <div class="monsterTitleBlock">
        <div class="monsterModalTop">
          <h2>${escapeHtml(row.name_th || row.name || row.code || "-")}</h2>
          ${row.is_boss ? `<span class="bossBadge"><i data-lucide="crown"></i> Boss</span>` : ""}
        </div>
        <div class="meta">${escapeHtml(row.code || "")}</div>
        <div class="pillrow">${headerPills(row, "monster").map((p) => `<span class="pill">${escapeHtml(p)}</span>`).join("")}</div>
        ${monsterElementSummary(row)}
      </div>
    </div>
    <div class="monsterDetailGrid">
      <section class="detailPanel">
        <h3>Basic Info</h3>
        <div class="statgrid compactStats">${monsterStats(row) || `<div class="stat"><span>ไม่มีค่าสเตตัสใน cache</span></div>`}</div>
      </section>
      <section class="detailPanel">
        <h3>สถานที่เกิด</h3>
        <div class="locationList">${locations || `<div class="origDropEmpty">ไม่พบข้อมูลจุดเกิด</div>`}</div>
      </section>
      <section class="detailPanel">
        ${elements || `<h3>Elements Info</h3><div class="origDropEmpty">ไม่พบข้อมูลธาตุ</div>`}
      </section>
      <section class="detailPanel skillsPanel">
        <h3>Skills (Special Attack)</h3>
        <div class="skillList">${skills || `<div class="origDropEmpty">ไม่มีสกิลพิเศษ</div>`}</div>
      </section>
      <section class="detailPanel widePanel dropsPanel">
        <h3>Drop List</h3>
        <div class="dropList">${monsterDrops(row)}</div>
      </section>
    </div>
  </div>`;
}

function monsterElementSummary(row) {
  const meta = elemMainMap[Number(row.element || 0)] || elemMainMap[0];
  return `<div class="monsterElementSummary">
    <div class="mainElement ${meta.cls}"><i data-lucide="${meta.icon}"></i><span>${escapeHtml(meta.name)}</span></div>
    <div class="weakElement"><span>แพ้ธาตุ</span><b>${escapeHtml(meta.weak)}</b></div>
  </div>`;
}

function dropHeading(type) {
  if (type === "map") return "รายชื่อในแผนที่";
  if (type === "monster") return "Drop List";
  return "แหล่งดรอป (Drops)";
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
  const real = String(row.real_id || row.name_id || "");
  if (BAG_CONTENTS[real]) {
    parts.push(`<div class="stat"><span>ไอเทมดรอปในถุง</span><b>${BAG_CONTENTS[real].length.toLocaleString()} รายการ</b></div>`);
  }
  if (BAG_GOLD[real]) {
    parts.push(`<div class="stat"><span>เงินในกล่อง</span><b>${BAG_GOLD[real]}</b></div>`);
  }
  if (BAG_EMPTY_CHANCE[real]) {
    const total = BAG_CONTENTS[real].reduce((sum, entry) => sum + Math.round(parseFloat(entry.percent) * 100), 0)
      + Math.round(parseFloat(BAG_EMPTY_CHANCE[real]) * 100);
    if (total !== 10000) {
      parts.push(`<div class="stat"><span>รวมอัตราดรอปตามไฟล์</span><b>${(total / 100).toFixed(2)}%</b></div>`);
    }
  }
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
  if (!groups.atk.length && !groups.def.length) return "";
  const atkTitle = type === "monster" ? "โจมตีธาตุ" : "ธาตุโจมตี";
  const defTitle = type === "monster" ? "ป้องกันธาตุ" : "ธาตุป้องกัน";
  return `<div class="origElementBlock">
    ${type === "monster" ? `<h4 class="origElementHeading">Elements Info</h4>` : ""}
    ${renderOrigElems(groups.atk, atkTitle, false)}
    ${renderOrigElems(groups.def, defTitle, true)}
  </div>`;
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

function renderOrigElems(elems, title, shieldIcon) {
  if (!elems.length) return "";
  return `<div class="origElemGroup">
    <div class="origElemTitle">${escapeHtml(title)}</div>
    <div class="origElemGrid">${elems.map((elem) => origElemCell(elem, title, shieldIcon)).join("")}</div>
  </div>`;
}

function origElemCell(elem, title, shieldIcon) {
  const meta = elemMap[elem.code] || { name: elem.code || "-", icon: "circle", cls: "text-gray-200" };
  const raw = String(elem.value ?? "");
  const value = raw && raw !== "0" ? `${raw}%` : raw || "-";
  return `<div class="origElemCell" title="${escapeHtml(title)} ${escapeHtml(meta.name)}">
    <i data-lucide="${shieldIcon ? "shield" : meta.icon}" class="w-3 h-3 ${meta.cls} mr-1"></i>${escapeHtml(value)}
  </div>`;
}

function monsterDrops(row) {
  const drops = [...(row.drops || [])].sort((a, b) => Number(b.rate || 0) - Number(a.rate || 0));
  if (!drops.length) return `<div class="origDropEmpty">ไม่พบไอเทมดรอป</div>`;
  return drops.slice(0, 120).map((item) => {
    const realId = String(item.real_id || "").trim();
    const iconNum = String(item.icon || realId || "").trim();
    const jump = realId || item.item_id || item.name || "";
    const oneIn = item.one_in && item.one_in !== "0" ? `1 ใน ${item.one_in}` : "";
    const icon = iconNum ? `<img src="${escapeHtml(itemIconUrl(iconNum))}" alt="" loading="lazy" onerror="fallbackItemImage(this,'${escapeHtml(pad(iconNum))}')">` : "";
    return `<div class="origDropRow" data-jump-view="items" data-jump-search="${escapeHtml(jump)}">
      <div class="origDropMain">
        <div class="origDropIcon">${icon}</div>
        <div class="origDropText">
          <div class="origDropName" title="${escapeHtml(item.name || item.item_id || "-")}">${escapeHtml(item.name || item.item_id || "-")}</div>
          <div class="origDropId">ID: ${escapeHtml(realId || item.item_id || "-")}</div>
        </div>
        <div class="origDropRate">
          <div class="${percentClass(item.percent)}">${escapeHtml(cleanPercent(item.percent) || String(item.rate || ""))}</div>
          <div class="origDropOne">${escapeHtml(oneIn)}</div>
        </div>
      </div>
    </div>`;
  }).join("");
}

function monsterLocations(row) {
  const locations = row.locations || [];
  if (!locations.length) return "";
  return locations.slice(0, 120).map((loc) => `<div class="locationChip ${loc.type === "boss" ? "bossLoc" : "mobLoc"}">
    <i data-lucide="${loc.type === "boss" ? "crown" : "map-pin"}"></i>
    <span>${escapeHtml(loc.map)}</span>
    <b>${loc.type === "boss" ? "Boss" : "Mob"}</b>
    ${loc.amount ? `<em>x${escapeHtml(String(loc.amount))}</em>` : ""}
    ${loc.reborn ? `<em><i data-lucide="clock"></i>${escapeHtml(String(loc.reborn))}</em>` : ""}
  </div>`).join("");
}

function monsterSkills(row) {
  const skills = row.skills || [];
  if (!skills.length) return "";
  return skills.slice(0, 40).map((skill) => {
    const data = skill.data || {};
    const details = skillDetails(data);
    return `<div class="skillCard">
      <div class="skillIcon"><i data-lucide="sparkles"></i></div>
      <div class="skillBody">
        <div class="skillName">${escapeHtml(data.name_th || skill.code || "-")}</div>
        <div class="skillCode">${escapeHtml(skill.code || data.name_id || "")}</div>
        ${details ? `<div class="skillDetails">${details}</div>` : ""}
      </div>
      <div class="skillRate">ระดับดี ${escapeHtml(skill.rate || "-")}</div>
    </div>`;
  }).join("");
}

function skillDetails(data) {
  const parts = [];
  if (data.damage_level_add) parts.push(`<span>Damage +${escapeHtml(String(data.damage_level_add))}</span>`);
  if (data.power_up) parts.push(`<span>Power +${escapeHtml(String(data.power_up))}</span>`);
  for (const fn of data.funcs || []) {
    const meta = elemMap[fn.type] || { name: fn.type || "-", icon: "circle", cls: "text-gray-300" };
    parts.push(`<span><i data-lucide="${meta.icon}" class="${meta.cls}"></i>${escapeHtml(meta.name)} ${escapeHtml(String(fn.val ?? ""))}%</span>`);
  }
  return parts.join("");
}

function mapStats(row) {
  return [
    ["Monster", row.monsters.length.toLocaleString()],
    ["Boss", row.bosses.length.toLocaleString()],
    ["รวม", row.total.toLocaleString()],
  ].map(([k, v]) => `<div class="stat"><span>${k}</span><b>${v}</b></div>`).join("");
}

function findMonsterByMapName(name, role) {
  const boss = role === "boss";
  return state.monsters.find((mob) => mob.name_th === name && Boolean(mob.is_boss) === boss)
    || state.monsters.find((mob) => mob.name_th === name)
    || null;
}

function mapMemberRow(name, role) {
  const monster = findMonsterByMapName(name, role);
  const label = role === "boss" ? "Boss" : "Monster";
  if (!monster) return `<div class="stat"><span>${escapeHtml(name)}</span><b class="${role === "boss" ? "accent" : ""}">${label}</b></div>`;
  return `<button class="stat mapMember" type="button" data-open-monster="${escapeHtml(name)}" data-open-monster-role="${role}">
    <span>${escapeHtml(name)}</span><b class="${role === "boss" ? "accent" : ""}">${label}</b>
  </button>`;
}

function mapMembers(row) {
  const monsterRows = row.monsters.map((name) => mapMemberRow(name, "monster"));
  const bossRows = row.bosses.map((name) => mapMemberRow(name, "boss"));
  return [...bossRows, ...monsterRows].slice(0, 160).join("");
}

function itemBagContents(row) {
  const real = String(row.real_id || row.name_id || "");
  const contents = BAG_CONTENTS[real];
  if (!contents) return "";
  const rows = contents.map((entry) => {
    const item = state.items.find((candidate) => String(candidate.real_id || candidate.name_id || "") === entry.real_id) || entry;
    const name = item.name_th || item.name || entry.name;
    const icon = item.icon || entry.real_id;
    return `<div class="origDropRow" data-jump-view="items" data-jump-search="${escapeHtml(entry.real_id)}">
      <div class="origDropMain">
        <div class="origDropIcon"><img src="${escapeHtml(itemIconUrl(icon))}" alt="" loading="lazy" onerror="fallbackItemImage(this,'${escapeHtml(pad(icon))}')"></div>
        <div class="origDropText">
          <div class="origDropName" title="${escapeHtml(name)}">${escapeHtml(name)}</div>
          <div class="origDropId">ID: ${escapeHtml(entry.real_id)}</div>
        </div>
        <div class="origDropRate">
          <div class="${percentClass(entry.percent)}">โอกาสได้รับ ${escapeHtml(entry.percent)}</div>
        </div>
      </div>
    </div>`;
  }).join("");
  const emptyChance = BAG_EMPTY_CHANCE[real];
  return rows + (emptyChance
    ? `<div class="origDropRow"><div class="origDropMain"><div class="origDropText"><div class="origDropName">Nothing</div></div><div class="origDropRate"><div class="${percentClass(emptyChance)}">โอกาสได้รับ ${escapeHtml(emptyChance)}</div></div></div></div>`
    : "");
}

function itemDrops(row) {
  const code = row.code;
  const real = String(row.real_id || row.name_id || "");
  const matches = state.monsters.filter((mob) => (mob.drops || []).some((drop) =>
    drop.item_id === code || drop.code === code || String(drop.real_id || "") === real || drop.name === row.name_th
  ));
  if (!matches.length) return `<div class="origDropEmpty"><i data-lucide="search-x"></i> ไม่พบข้อมูลดรอป</div>`;
  return matches.slice(0, 120).map((mob) => {
    const drop = (mob.drops || []).find((d) => d.item_id === code || d.code === code || String(d.real_id || "") === real || d.name === row.name_th) || {};
    const jump = mob.name_th || mob.name || mob.code || "";
    return `<div class="origDropRow" data-jump-view="monsters" data-jump-search="${escapeHtml(jump)}">
      <div class="origDropMain">
        <div class="origDropIcon"><img src="${escapeHtml(imageUrl(mob, "monster"))}" alt="" loading="lazy" ${imageEvents(mob, "monster")}></div>
        <div class="origDropText">
          <div class="origDropName" title="${escapeHtml(jump)}">${escapeHtml(jump)}</div>
          <div class="origDropId">Lv.${escapeHtml(String(mob.level || "-"))}</div>
        </div>
        <div class="origDropRate">
          <div class="${percentClass(drop.percent)}">Rate: ${escapeHtml(cleanPercent(drop.percent) || String(drop.rate || ""))}</div>
        </div>
      </div>
    </div>`;
  }).join("");
}

function itemIconUrl(iconNum) {
  return `${IMG_ITEM}${pad(iconNum)}.png`;
}

function percentClass(percent) {
  const pct = parseFloat(String(percent || "0").replace("%", "")) || 0;
  if (pct < 0.1) return "origRateUltra";
  if (pct < 1) return "origRateRare";
  if (pct < 5) return "origRateUncommon";
  return "origRateCommon";
}

function cleanPercent(percent) {
  return String(percent || "").replace(/\s*\(Aggregated\)/gi, "");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

async function loadData() {
  const [items, monsters, maps] = await Promise.all([
    fetch("data/items.json?v=20261014-golden-qilin").then((r) => r.json()),
    fetch("data/monsters.json?v=20261021-drop-update").then((r) => r.json()),
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
      const loc = {
        map: mapName,
        type: group === "bosses" ? "boss" : "mob",
        amount: typeof entry === "object" ? entry.amount : undefined,
        reborn: typeof entry === "object" ? entry.reborn : undefined,
      };
      if (part.startsWith("role_")) {
        if (!byCode.has(part)) byCode.set(part, []);
        byCode.get(part).push(loc);
        const folded = part.toLowerCase();
        if (folded !== part) {
          if (!byCode.has(folded)) byCode.set(folded, []);
          byCode.get(folded).push(loc);
        }
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
    const locations = [
      ...(byName.get(monster.name_th) || []),
      ...(byCode.get(monster.code) || []),
      ...(byCode.get(String(monster.code || "").toLowerCase()) || []),
      ...(manualMonsterLocations[monster.name_id] || []),
    ];
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
  const byName = new Map();
  const byCode = new Map();
  for (const monster of state.monsters) {
    if (monster.name_th) byName.set(monster.name_th, monster.name_th);
    if (monster.code) {
      byCode.set(monster.code, monster.name_th || monster.name || monster.code);
      byCode.set(String(monster.code).toLowerCase(), monster.name_th || monster.name || monster.code);
    }
  }
  const resolveMonsterName = (key) => byCode.get(key) || byCode.get(String(key).toLowerCase()) || byName.get(key) || key;
  const add = (mapName, monsterName, group) => {
    const name = String(mapName || "").trim();
    const rawMonster = String(monsterName || "").trim();
    if (!name || !rawMonster) return;
    if (!byMap.has(name)) byMap.set(name, { kind: "map", name, monsters: [], bosses: [], total: 0 });
    const row = byMap.get(name);
    const list = group === "bosses" ? row.bosses : row.monsters;
    for (const part of rawMonster.split(",").map((value) => value.trim()).filter(Boolean)) {
      const monster = resolveMonsterName(part);
      if (!list.includes(monster)) list.push(monster);
    }
  };
  for (const group of ["monsters", "bosses"]) {
    for (const [monsterName, maps] of Object.entries(data[group] || {})) {
      for (const entry of maps || []) add(typeof entry === "string" ? entry : entry.map, monsterName, group);
    }
  }
  for (const monster of state.monsters) {
    for (const loc of manualMonsterLocations[monster.name_id] || []) add(loc.map, monster.name_th, "bosses");
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

document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-page]");
  if (!btn) return;
  const page = Number(btn.dataset.page);
  const totalPages = Math.max(1, Math.ceil(state.filtered.length / PAGE_SIZE));
  if (!page || page < 1 || page > totalPages || page === state.page) return;
  state.page = page;
  render();
  window.scrollTo({ top: els.results.offsetTop - 90, behavior: "smooth" });
});

els.detail.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-codex-tab]");
  if (tab) {
    setCodexTab(tab.dataset.codexTab);
    return;
  }
  const page = event.target.closest("[data-codex-page]");
  if (page && !page.disabled) {
    codex.page = Number(page.dataset.codexPage);
    renderCodexResults();
    els.detail.querySelector(`[data-codex-page="${codex.page}"][aria-current]`)?.focus({ preventScroll: true });
    return;
  }
  const itemButton = event.target.closest("[data-codex-item]");
  if (itemButton) {
    const item = state.items.find((item) => String(item.real_id) === itemButton.dataset.codexItem);
    if (item) {
      openDetail(item);
      els.detail.querySelector(".detail").insertAdjacentHTML("afterbegin", `<button type="button" class="codexBackButton" data-codex-return><i data-lucide="arrow-left"></i>${escapeHtml(codex.row.name_th)}</button>`);
      lucide.createIcons();
    }
    return;
  }
  if (event.target.closest("[data-codex-return]")) {
    openDetail(codex.row);
    return;
  }
  if (event.target.closest("[data-codex-save]")) {
    const key = saveKey(codex.row);
    if (state.saved[key]) delete state.saved[key];
    else state.saved[key] = { name: codex.row.name_th, time: Date.now() };
    localStorage.setItem("3kdb_saved", JSON.stringify(state.saved));
    const saved = Boolean(state.saved[key]);
    const button = $("codexSave");
    button.setAttribute("aria-pressed", String(saved));
    button.title = saved ? "นำออกจากบันทึก" : "บันทึกไอเทม";
    button.setAttribute("aria-label", button.title);
    button.innerHTML = `<i data-lucide="${saved ? "bookmark-check" : "bookmark"}"></i>`;
    render();
    lucide.createIcons();
    return;
  }
  const member = event.target.closest("[data-open-monster]");
  if (member) {
    const monster = findMonsterByMapName(member.dataset.openMonster || "", member.dataset.openMonsterRole || "");
    if (!monster) return;
    els.detail.innerHTML = monsterDetail(monster);
    els.dialog.scrollTop = 0;
    lucide.createIcons();
    return;
  }
  const jump = event.target.closest("[data-jump-view]");
  if (!jump) return;
  const view = jump.dataset.jumpView;
  const search = jump.dataset.jumpSearch || "";
  els.dialog.close();
  setActiveView(view);
  els.search.value = search;
  applyFilters();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.detail.addEventListener("input", (event) => {
  if (event.target.id !== "codexSearch") return;
  codex.query = event.target.value;
  codex.page = 1;
  renderCodexResults();
});
els.detail.addEventListener("change", (event) => {
  if (event.target.id !== "codexSort") return;
  codex.sort = event.target.value;
  codex.page = 1;
  renderCodexResults();
});
els.detail.addEventListener("keydown", (event) => {
  const tab = event.target.closest("[data-codex-tab]");
  if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const target = event.key === "Home" ? "contents" : event.key === "End" ? "sources"
    : tab.dataset.codexTab === "contents" ? "sources" : "contents";
  setCodexTab(target);
  els.detail.querySelector(`[data-codex-tab="${target}"]`).focus();
});

[els.search, els.cat, els.job, els.sort, els.min, els.max].forEach((el) => el.addEventListener("input", applyFilters));
$("filterToggle").addEventListener("click", () => {
  const expanded = $("filterToggle").getAttribute("aria-expanded") !== "true";
  $("filterToggle").setAttribute("aria-expanded", String(expanded));
  $("filterFields").classList.toggle("expanded", expanded);
});
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
