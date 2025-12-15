import { users, User } from '@/data/users';

export interface LoginPayload {
    username: string;
    password: string;
}

export function login(payload: LoginPayload): Omit<User, 'password'> {
    const user = users.find(
        (u) =>
            u.username === payload.username &&
            u.password === payload.password
    );

    if (!user) {
        throw new Error('Sai username hoặc password');
    }

    const { password, ...safeUser } = user;
    return safeUser;
}
