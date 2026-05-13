import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { registerWithEmail } from "../../firebase/auth";
import Button from "../common/Button";
import toast from "react-hot-toast";


export const RegisterForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) { toast.error("Fill in all fields"); return; }
        if (password.length < 6) { toast.error("Password must be at least 6 characters"); return; }
        if (password !== confirm) { toast.error("Passwords do not match"); return; }
        setLoading(true)
        try {
            await registerWithEmail(email, password, name);
            toast.success("Account created! Welcome to GameVault 🎮");
            onSuccess?.();
        } catch (err) {
            const msgs = {
                "auth/email-already-in-use": "An account with this email already exists.",
                "auth/invalid-email": "Invalid email address.",
                "auth/weak-password": "Password is too weak.",
            };
            toast.error(msgs[err.code] || "Registration failed. Try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* User */}
            <div className="relative">
                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-muted pointer-events-none" />
                <input type="text" placeholder="Display name" value={name}
                    onChange={(e) => setName(e.target.value)} className="input-base pl-9" autoComplete="name" />
            </div>

            {/* Email */}
            <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-muted pointer-events-none" />
                <input
                    type="email" placeholder="Email address" value={email}
                    onChange={(e) => setEmail(e.target.value)} className="input-base pl-9" autoComplete="email" />
            </div>

            {/* Password */}
            <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-muted pointer-events-none" />
                <input
                    type={showPw ? "text" : "password"} placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} className="input-base pl-9 pr-10" autoComplete="new-password" />
                <button type="button" onClick={() => showPw((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-vault-muted hover:text-vault-text">
                    {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
            </div>

            {/* Confirm */}
            <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-muted pointer-events-none" />
                <input
                    type={showPw ? "text" : "password"} placeholder="Confirm password" value={confirm}
                    onChange={(e) => setConfirm(e.target.value)} className="input-base pl-9" autoComplete="new-password" />
            </div>

            <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full">
                Create Account
            </Button>
        </form>
    )
}
