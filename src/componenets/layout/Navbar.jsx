// src/components/layout/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Search, Heart, User, LogOut, ChevronDown, X, Menu } from "lucide-react";

export default function Navbar() {

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const profileRef = useRef(null);



  // async function handleLogout(
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/browse", label: "Browse" },
    { to: "/wishlist", label: "Wishlist" },
  ];


  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass bar */}
      <div className="glass border-b border-vault-border/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center h-16 gap-4">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-vault-blue to-vault-purple flex items-center justify-center">
                <span className="font-display text-white text-xs font-black">GV</span>
              </div>
              <span className="font-display text-lg font-black tracking-wider hidden sm:block">
                <span className="text-white">GAME</span>
                <span className="text-vault-blue">VAULT</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1 ml-2">
              {navLinks.map(({ to, label }) => (
                <a
                  key={to}
                  href={to}
                  className={"px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 text-vault-subtle hover:text-vault-text hover:bg-vault-surface"}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Search */}
            <div className="flex-1 max-w-md mx-2 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search games…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-vault-surface/80 border border-vault-border rounded-lg pl-9 pr-9 py-2.5
                           text-sm text-vault-text placeholder-vault-muted font-body
                           focus:outline-none focus:border-vault-blue transition-colors"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-vault-muted hover:text-vault-text">
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 ml-auto flex-shrink-0">
              {/* Wishlist */}
              <a
                href="/wishlist"
                className="relative p-2 rounded-lg text-vault-muted hover:text-vault-pink hover:bg-vault-pink/10 transition-all"
              >
                <Heart size={18} />
              </a>

              <button
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-vault-blue to-vault-purple text-white text-sm font-semibold tracking-wide
                hover:opacity-90 active:scale-95 transition-all"
              >
                Sign In
              </button>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-vault-muted hover:text-vault-text"
                onClick={() => setMobileMenu((p) => !p)}
              >
                {mobileMenu ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenu && (
          <div className="md:hidden border-t border-vault-border px-4 py-3 space-y-1">
            {navLinks.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                onClick={() => setMobileMenu(false)}
                className={"block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors text-vault-subtle hover:text-vault-text"}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}     
