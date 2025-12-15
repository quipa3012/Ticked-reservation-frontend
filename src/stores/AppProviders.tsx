'use client';

import { AuthProvider } from '@/stores/auth/AuthContext';

export default function AppProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}
