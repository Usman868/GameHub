// src/components/game/PlatformIcons.jsx
import { Monitor, Gamepad2, Smartphone, Laptop, Globe, Terminal } from "lucide-react";

const ICON_MAP = {
  pc: Monitor,
  playstation: Gamepad2,
  xbox: Gamepad2,
  nintendo: Gamepad2,
  ios: Smartphone,
  android: Smartphone,
  linux: Terminal,
  mac: Laptop,
  web: Globe,
};

const COLOR_MAP = {
  pc: "text-blue-400",
  playstation: "text-blue-300",
  xbox: "text-green-400",
  nintendo: "text-red-400",
  ios: "text-slate-300",
  android: "text-green-300",
  linux: "text-yellow-400",
  mac: "text-slate-300",
};

function getIconAndColor(slug = "") {
  const key = Object.keys(ICON_MAP).find((k) => slug.includes(k));
  return {
    Icon: ICON_MAP[key] || Gamepad2,
    color: COLOR_MAP[key] || "text-vault-muted",
    key: key || slug,
  };
}

export default function PlatformIcons({ platforms = [], max = 5, size = 13 }) {
  if (!platforms?.length) return null;

  const seen = new Set();
  const unique = [];

  for (const { platform } of platforms) {
    const { key } = getIconAndColor(platform.slug);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(platform);
    }
    if (unique.length >= max) break;
  }

  return (
    <div className="flex items-center gap-1.5">
      {unique.map((platform) => {
        const { Icon, color } = getIconAndColor(platform.slug);
        return (
          <span key={platform.id} title={platform.name} className={color}>
            <Icon size={size} />
          </span>
        );
      })}
    </div>
  );
}
