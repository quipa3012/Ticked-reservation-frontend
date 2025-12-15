export interface User {
    id: number;
    username: string;
    password: string;
    fullName: string;
    role: 'USER' | 'CUSTOMER_SUPPORT';
}

export const users: User[] = [
    {
        id: 1,
        username: 'support',
        password: '123456',
        fullName: 'Customer Support',
        role: 'CUSTOMER_SUPPORT',
    },
    {
        id: 2,
        username: 'user',
        password: '123456',
        fullName: 'Normal User',
        role: 'USER',
    },
];
