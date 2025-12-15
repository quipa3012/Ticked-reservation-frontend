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
        fullName: 'Người Hỗ Trợ',
        role: 'CUSTOMER_SUPPORT',
    },
    {
        id: 2,
        username: 'user1',
        password: '123456',
        fullName: 'Người dùng 1',
        role: 'USER',
    },
    {
        id: 3,
        username: 'quipa3012',
        password: '123456',
        fullName: 'Phan Anh Quí',
        role: 'USER',
    },
];
