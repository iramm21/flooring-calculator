// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null; // Add user object
  login: (token: string, user: User) => void; // Pass user along with the token
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Store user information
  const router = useRouter();

  // Simulate login action, in a real case, it should verify a token or session
  const login = (token: string, user: User) => {
    localStorage.setItem("authToken", token); // Simulate saving a token in localStorage
    setIsAuthenticated(true);
    setUser(user); // Set user information
    router.push("/dashboard"); // Navigate after login
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // Remove token on logout
    setIsAuthenticated(false);
    setUser(null); // Clear user data
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
