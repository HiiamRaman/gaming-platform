import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { AdminLayout } from "./layout/AdminLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { DepositAudit } from "./pages/Transactions/DepositAudit";
import { Login } from "./pages/auth/Login";

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-full">
    <h1 className="text-2xl font-bold text-zinc-500">{title} Module Coming Soon</h1>
  </div>
);

// A simple wrapper component to check authentication
function ProtectedRoute({ isAuthenticated }: { isAuthenticated: boolean }) {
  if (!isAuthenticated) {
    // If they aren't logged in, redirect them to the login page
    return <Navigate to="/admin/login" replace />;
  }
  // Otherwise, render the child routes
  return <Outlet />;
}

export function App() {
  // In a real app, you'd check a token in localStorage or use a state manager like Zustand
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Toaster position="bottom-right" richColors theme="dark" />
      <Routes>

        {/* Base redirect */}
        <Route path="/" element={<Navigate to="/admin" replace />} />

        {/* Public Login Route */}
        <Route
          path="/admin/login"
          element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />}
        />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Placeholder title="User Management" />} />
            <Route path="games" element={<Placeholder title="Game Matrix" />} />
            <Route path="transactions" element={<DepositAudit />} />
          </Route>
        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<Placeholder title="404 - System Not Found" />} />
      </Routes>
    </Router>
  );
}

export default App;
