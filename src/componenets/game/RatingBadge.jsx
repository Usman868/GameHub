// src/components/game/RatingBadge.jsx
import { Star } from "lucide-react";
import { getRatingColor, getRatingLabel } from "../../utils/helpers";

export default function RatingBadge({ rating, showLabel = false, size = "sm" }) {
  const color = getRatingColor(rating);
  const label = getRatingLabel(rating);
  const textSize = size === "lg" ? "text-base" : "text-xs";

  if (!rating) {
    return <span className="text-vault-muted text-xs font-semibold">N/A</span>;
  }

  return (
    <span className={`inline-flex items-center gap-1 font-semibold ${textSize} ${color}`}>
      <Star size={size === "lg" ? 14 : 11} fill="currentColor" />
      {rating.toFixed(1)}
      {showLabel && (
        <span className="text-vault-muted font-normal ml-0.5">· {label}</span>
      )}
    </span>
  );
}
