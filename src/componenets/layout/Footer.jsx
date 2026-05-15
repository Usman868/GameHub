// // src/components/layout/Footer.jsx
// import { Link } from "react-router-dom";
// import { Github, Twitter, Twitch } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="mt-20 border-t border-vault-border bg-vault-surface/50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="md:col-span-2 space-y-3">
//             <div className="flex items-center gap-2">
//               <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-vault-blue to-vault-purple flex items-center justify-center">
//                 <span className="font-display text-white text-xs font-black">GV</span>
//               </div>
//               <span className="font-display text-base font-black tracking-wider">
//                 <span className="text-white">GAME</span>
//                 <span className="text-vault-blue">VAULT</span>
//               </span>
//             </div>
//             <p className="text-vault-muted text-sm leading-relaxed max-w-xs">
//               Discover, track, and curate your ultimate game collection. Powered by RAWG — the world's largest video game database.
//             </p>
//             <div className="flex gap-3 pt-1">
//               {[Github, Twitter, Twitch].map((Icon, i) => (
//                 <a key={i} href="#" className="p-2 rounded-lg text-vault-muted hover:text-vault-blue hover:bg-vault-blue/10 transition-colors">
//                   <Icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <p className="text-[10px] font-display tracking-[2px] text-vault-muted uppercase mb-4 font-bold">Navigate</p>
//             <ul className="space-y-2">
//               {[["Home", "/"], ["Browse Games", "/browse"], ["Wishlist", "/wishlist"], ["Profile", "/profile"]].map(([label, to]) => (
//                 <li key={to}>
//                   <Link to={to} className="text-sm text-vault-subtle hover:text-vault-blue transition-colors">{label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Info */}
//           <div>
//             <p className="text-[10px] font-display tracking-[2px] text-vault-muted uppercase mb-4 font-bold">Info</p>
//             <ul className="space-y-2 text-sm text-vault-muted">
//               <li>Game data by <a href="https://rawg.io" target="_blank" rel="noreferrer" className="text-vault-blue hover:underline">RAWG.io</a></li>
//               <li>Auth by Firebase</li>
//               <li>Built with React + Tailwind</li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 pt-6 border-t border-vault-border flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-vault-muted text-xs">© {new Date().getFullYear()} GameVault. All rights reserved.</p>
//           <p className="text-vault-muted text-xs">Game data provided by <a href="https://rawg.io" target="_blank" rel="noreferrer" className="text-vault-blue">RAWG Video Games Database</a></p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from 'react'

export const Footer = () => {
  return (
    <div>Footer</div>
  )
}
