export interface Seat {
    code: string;               // A1, A2...
    type: 'NORMAL' | 'VIP';
    price: number;              // giá ghế
}

export const seats: Seat[] = [
    { code: 'A1', type: 'NORMAL', price: 70000 },
    { code: 'A2', type: 'NORMAL', price: 70000 },
    { code: 'A3', type: 'VIP', price: 90000 },
    { code: 'B1', type: 'VIP', price: 90000 },
];
