// src/components/common/Button.jsx
import { Loader2 } from "lucide-react";

const variants = {
  primary: "bg-gradient-to-r from-vault-blue to-vault-purple text-white hover:opacity-90 shadow-glow-blue",
  secondary: "bg-transparent border border-vault-blue text-vault-blue hover:bg-vault-blue/10",
  ghost: "bg-transparent border border-vault-border text-vault-subtle hover:border-vault-blue hover:text-vault-blue",
  danger: "bg-transparent border border-vault-red text-vault-red hover:bg-vault-red/10",
  wishlist: "bg-transparent border border-vault-pink text-vault-pink hover:bg-vault-pink/10",
};

const sizes = {
  xs: "px-3 py-1.5 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  loading = false, 
  className = "", 
  icon: Icon, 
  iconRight, 
  ...props 
}) {
  return (
    <button 
      disabled={loading || props.disabled}
      className={`
        inline-flex items-center justify-center gap-2 
        font-body font-semibold tracking-wide rounded-lg 
        transition-all duration-200 cursor-pointer 
        disabled:opacity-50 disabled:cursor-not-allowed 
        active:scale-95 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <Loader2 size={14} className="animate-spin" />
      ) : Icon ? (
        <Icon size={14} />
      ) : null}
      
      {children}
      
      {iconRight && !loading && <iconRight size={14} />}
    </button>
  );
}