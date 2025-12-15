'use client';

import { Card, Select, Button, Typography, message } from 'antd';
import { useState, useEffect } from 'react';
import { cinemas } from '@/data/cinemas';
import { seats } from '@/data/seats';
import { bookings } from '@/data/bookings';
import styles from './booking.module.scss';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/stores/auth/AuthContext';

const { Title } = Typography;

interface Props {
    movieId: number;
}

export default function BookingPage({ movieId }: Props) {
    const [cinemaId, setCinemaId] = useState<number>();
    const [showDate, setShowDate] = useState('2025-12-20');
    const [showTime, setShowTime] = useState('19:00');
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            message.warning('Vui lòng đăng nhập để đặt vé');
            router.replace('/login');
        }
    }, [user, router]);

    // ⛔ Chưa login thì không render gì
    if (!user) return null;

    const bookedSeats = bookings
        .filter(
            b =>
                b.movieId === movieId &&
                b.cinemaId === cinemaId &&
                b.showDate === showDate &&
                b.showTime === showTime
        )
        .flatMap(b => b.seats);

    const toggleSeat = (code: string) => {
        setSelectedSeats(prev =>
            prev.includes(code)
                ? prev.filter(s => s !== code)
                : [...prev, code]
        );
    };

    const totalPrice = seats
        .filter(s => selectedSeats.includes(s.code))
        .reduce((sum, s) => sum + s.price, 0);

    const handleBooking = () => {
        if (!cinemaId || selectedSeats.length === 0) {
            message.error('Vui lòng chọn rạp và ghế');
            return;
        }

        message.success('Đặt vé thành công (mock)');
        setSelectedSeats([]);
    };

    return (
        <div className={styles.container}>
            <Card>
                <Title level={2} style={{ textAlign: 'center' }}>Đặt vé</Title>

                <div className={styles.section}>
                    <Title level={5}>Bạn muốn xem phim ở rạp:</Title>
                    <Select
                        placeholder="Chọn rạp"
                        className={styles.select}
                        onChange={setCinemaId}
                        options={cinemas.map(c => ({
                            value: c.id,
                            label: c.name,
                        }))}
                    />
                </div>

                <Title level={5}>Danh sách chỗ ngồi còn trống:</Title>
                <div className={styles.seatGrid}>
                    {seats.map(seat => {
                        const isBooked = bookedSeats.includes(seat.code);
                        const isSelected = selectedSeats.includes(seat.code);

                        return (
                            <Button
                                key={seat.code}
                                disabled={isBooked}
                                type={isSelected ? 'primary' : 'default'}
                                onClick={() => toggleSeat(seat.code)}
                            >
                                {seat.code}
                            </Button>
                        );
                    })}
                </div>

                <div className={styles.footer}>
                    <div>
                        Ghế đã chọn: {selectedSeats.join(', ') || '—'}
                    </div>
                    <div>
                        Tổng tiền:{' '}
                        <strong>{totalPrice.toLocaleString()} đ</strong>
                    </div>

                    <Button type="primary" onClick={handleBooking}>
                        Xác nhận đặt vé
                    </Button>
                </div>
            </Card>
        </div>
    );
}
