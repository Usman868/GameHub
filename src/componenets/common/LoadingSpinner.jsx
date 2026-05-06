// src/components/common/LoadingSpinner.jsx
export const LoadingSpinner = ({ size = "md", text }) => {
  const sizes = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-12 h-12" };
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizes[size]} relative`}>
        <div className="absolute inset-0 rounded-full border-2 border-vault-border" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-vault-blue animate-spin" />
      </div>
      {text && <p className="text-vault-muted text-sm font-body">{text}</p>}
    </div>
  );
}
