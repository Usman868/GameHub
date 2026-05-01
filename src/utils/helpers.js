
export const PLATFORM_ICONS = {
  pc:          "Monitor",
  playstation: "Gamepad2",
  xbox:        "Gamepad",
  nintendo:    "Gamepad",
  ios:         "Smartphone",
  android:     "Smartphone",
  linux:       "Terminal",
  mac:         "Laptop",
  web:         "Globe",
};

export const PLATFORM_COLORS = {
  pc:          "text-blue-400",
  playstation: "text-blue-300",
  xbox:        "text-green-400",
  nintendo:    "text-red-400",
  ios:         "text-gray-300",
  android:     "text-green-300",
  linux:       "text-yellow-400",
};

export function getRatingColor(rating) {
  if (!rating) return "text-vault-muted";
  if (rating >= 4.5) return "text-emerald-400";
  if (rating >= 4.0) return "text-green-400";
  if (rating >= 3.0) return "text-yellow-400";
  if (rating >= 2.0) return "text-orange-400";
  return "text-red-400";
}

export function getRatingLabel(rating) {
  if (!rating) return "N/A";
  if (rating >= 4.5) return "Exceptional";
  if (rating >= 4.0) return "Recommended";
  if (rating >= 3.0) return "Meh";
  return "Skip";
}

export function getMetacriticColor(score) {
  if (!score) return "border-vault-muted text-vault-muted";
  if (score >= 80) return "border-green-500 text-green-400";
  if (score >= 60) return "border-yellow-500 text-yellow-400";
  return "border-red-500 text-red-400";
}

export function platformIcon(slug = "") {
  const key = Object.keys(PLATFORM_ICONS).find((k) => slug.includes(k));
  return key || "gamepad";
}

export function truncate(str, len = 160) {
  if (!str) return "";
  return str.length > len ? str.slice(0, len) + "…" : str;
}

export function formatDate(dateStr) {
  if (!dateStr) return "TBA";
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export const GENRES_LIST = [
  { id: 4,  name: "Action" },
  { id: 51, name: "Indie" },
  { id: 3,  name: "Adventure" },
  { id: 5,  name: "RPG" },
  { id: 10, name: "Strategy" },
  { id: 2,  name: "Shooter" },
  { id: 7,  name: "Puzzle" },
  { id: 11, name: "Arcade" },
  { id: 83, name: "Platformer" },
  { id: 1,  name: "Racing" },
  { id: 15, name: "Sports" },
  { id: 6,  name: "Fighting" },
  { id: 59, name: "Massively Multiplayer" },
  { id: 28, name: "Board Games" },
  { id: 34, name: "Educational" },
];

export const PLATFORMS_LIST = [
  { id: 4,   name: "PC",           slug: "pc" },
  { id: 187, name: "PS5",          slug: "playstation5" },
  { id: 18,  name: "PS4",          slug: "playstation4" },
  { id: 186, name: "Xbox Series X",slug: "xbox-series-x" },
  { id: 1,   name: "Xbox One",     slug: "xbox-one" },
  { id: 7,   name: "Switch",       slug: "nintendo-switch" },
  { id: 3,   name: "iOS",          slug: "ios" },
  { id: 21,  name: "Android",      slug: "android" },
];
