'use client';

import { Card, Button, Typography, Tag } from 'antd';
import { movies } from '@/data/movies';
import { useRouter } from 'next/navigation';
import styles from './movie-detail.module.scss';

const { Title, Paragraph } = Typography;

interface Props {
    movieId: number;
}

export default function MovieDetail({ movieId }: Props) {
    const router = useRouter();
    const movie = movies.find(m => m.id === movieId);

    if (!movie) {
        return <Paragraph>Không tìm thấy phim</Paragraph>;
    }

    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.wrapper}>
                    <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className={styles.poster}
                    />

                    <div className={styles.info}>
                        <Title level={2}>{movie.title}</Title>

                        <Tag color="blue">{movie.genre}</Tag>

                        <Paragraph className={styles.description}>
                            {movie.description}
                        </Paragraph>

                        <Paragraph>
                            ⏱ <strong>{movie.duration}</strong> phút
                        </Paragraph>

                        <Button
                            type="primary"
                            size="large"
                            onClick={() => router.push(`/booking/${movie.id}`)}
                        >
                            Đặt vé
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
