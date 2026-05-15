// import React from 'react';
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthModal } from "./componenets/auth/AuthModal";
import ErrorBoundary from "./componenets/common/ErrorBoundary";
import RootLayout from "./componenets/layout/RootLayout";
import {HomePage} from "./pages/HomePage";
import { BrowsePage } from "./pages/BrowsePage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { WishlistPage } from "./pages/WishlistPage";
import { ProfilePage } from "./pages/ProfilePage";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-vault-bg flex items-center justify-center text-center px-4">
      <div>
        <p className="font-display text-8xl font-black text-vault-border mb-4">404</p>
        <p className="text-vault-muted text-lg mb-6">Page not found</p>
        <a href="/" className="text-vault-blue hover:underline font-semibold">Go home →</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <WishlistProvider> */}
          <ErrorBoundary>
            <AuthModal />
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse" element={<BrowsePage />} />
                <Route path="/game/:id" element={<GameDetailPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        {/* </WishlistProvider> */}
      </AuthProvider>
    </BrowserRouter>
  );
}
