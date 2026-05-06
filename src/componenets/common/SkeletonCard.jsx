// src/components/common/SkeletonCard.jsx
export const SkeletonCard = () => {
  return (
    <div className="bg-vault-card rounded-xl overflow-hidden border border-vault-border">
      <div className="skeleton h-48 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <div className="skeleton h-4 w-3/4" />
        <div className="skeleton h-3 w-1/2" />
        <div className="flex gap-2 pt-1">
          <div className="skeleton h-5 w-16 rounded-full" />
          <div className="skeleton h-5 w-16 rounded-full" />
        </div>
        <div className="flex justify-between pt-1">
          <div className="skeleton h-4 w-12" />
          <div className="skeleton h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export const SkeletonGrid = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
