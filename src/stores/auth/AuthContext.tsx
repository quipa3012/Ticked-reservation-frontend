'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { login as loginService, LoginPayload } from '@/services/auth/authService';

interface AuthContextValue {
    user: any;
    login: (payload: LoginPayload) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (payload: LoginPayload) => {
        const user = loginService(payload);
        setUser(user);
        localStorage.setItem('auth_user', JSON.stringify(user));
        return user;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error('useAuth phải nằm trong AuthProvider');
    }
    return ctx;
}
