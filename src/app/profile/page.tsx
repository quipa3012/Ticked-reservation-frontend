'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/stores/auth/AuthContext';
import ProfileView from '@/components/profile/ProfileView';

export default function ProfilePage() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.replace('/login');
        }
    }, [user, router]);

    if (!user) return null;

    return <ProfileView />;
}
