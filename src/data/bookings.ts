export interface Booking {
    id: number;
    userId: number;
    movieId: number;
    cinemaId: number;

    showDate: string;   // 2025-12-20
    showTime: string;   // 19:00

    seats: string[];    // ['A1', 'A2']
    totalPrice: number;
}

export const bookings: Booking[] = [
    {
        id: 1,
        userId: 2,
        movieId: 1,
        cinemaId: 1,
        showDate: '2025-12-20',
        showTime: '19:00',
        seats: ['A1', 'A2'],
        totalPrice: 140000,
    },
];
