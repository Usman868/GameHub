import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { loginWithEmail } from "../../firebase/auth";
import Button from "../common/Button";
import toast from "react-hot-toast";

export const loginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPw, setShowPw] = useState();
  const [loading, setLoading] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) { toast.error("Fill in all fields"); return; }
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      toast.success("welcome back!");
      onSuccess?.();
    } catch (err) {
      const msgs = {
        "auth/user-not-found": "No account found with that email.",
        "auth/wrong-password": "Incorrect password.",
        "auth/invalid-email": "Invalid email address.",
        "auth/too-many-requests": "Too many attempts. Try again later.",
      };
      toast.error(msgs[err.code] || "Sign in failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div className="relative">
        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-muted pointer-events-none" />
        <input
          type="email" placeholder="Email address" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-base pl-9"
          autoComplete="email"
        />
      </div>

      {/* Password */}
      <div className="relative">
        <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-muted pointer-events-none" />
        <input
          type={showPw ? "text" : "password"} placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-base pl-9 pr-10"
          autoComplete="current-password"
        />
        <button type="button" onClick={() => showPw((p) => !p)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-vault-muted hover:text-vault-text"
        >
          {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>
      </div>

      <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full">
        Sign In
      </Button>
    </form>
  )
}

