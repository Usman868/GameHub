// src/components/auth/AuthModal.jsx
import { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { loginForm } from "./LoginForm";
import {RegisterForm} from "./RegisterForm";
import SocialAuth from "./SocialAuth";

export const AuthModal = () => {
  const { authModalOpen, closeAuthModal } = useAuth();
  const [tab, setTab] = useState("login"); // "login" | "register"

  if (!authModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeAuthModal}>
      <div
        className="relative w-full max-w-md mx-4 bg-vault-card border border-vault-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-vault-blue via-vault-purple to-vault-pink" />

        {/* Close */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-vault-muted hover:text-vault-text hover:bg-vault-surface transition-colors z-10"
        >
          <X size={16} />
        </button>

        <div className="p-7">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-vault-blue to-vault-purple flex items-center justify-center">
              <span className="font-display text-white text-xs font-black">GV</span>
            </div>
            <span className="font-display text-lg font-black tracking-wider">
              <span className="text-white">GAME</span>
              <span className="text-vault-blue">VAULT</span>
            </span>
          </div>

          {/* Tabs */}
          <div className="flex bg-vault-surface rounded-lg p-1 mb-6">
            {["login", "register"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all capitalize
                  ${tab === t ? "bg-vault-blue text-white shadow" : "text-vault-muted hover:text-vault-text"}`}
              >
                {t === "login" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          {tab === "login" ? <LoginForm onSuccess={closeAuthModal} /> : null}
          {tab === "register" ? <RegisterForm onSuccess={closeAuthModal} /> : null}

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-vault-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-vault-card px-3 text-xs text-vault-muted">or continue with</span>
            </div>
          </div>

          <SocialAuth onSuccess={closeAuthModal} />
        </div>
      </div>
    </div>
  );
}
