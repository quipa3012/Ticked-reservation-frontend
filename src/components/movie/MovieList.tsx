'use client';

import { Card, Col, Row, Typography, Tag } from 'antd';
import Link from 'next/link';
import { movies } from '@/data/movies';
import styles from './movie.module.scss';

const { Title, Paragraph } = Typography;

export default function MovieList() {
    return (
        <div className={styles.container}>
            <Title level={2} style={{ textAlign: 'center' }}>Danh sách phim</Title>

            <Row gutter={[24, 24]}>
                {movies.map(movie => (
                    <Col key={movie.id} xs={24} sm={12} md={8}>
                        <Link href={`/movies/${movie.id}`}>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        alt={movie.title}
                                        src={movie.posterUrl}
                                        className={styles.poster}
                                    />
                                }
                            >
                                <Title level={4}>{movie.title}</Title>
                                <Tag color="blue">{movie.genre}</Tag>

                                <Paragraph ellipsis={{ rows: 2 }}>
                                    {movie.description}
                                </Paragraph>

                                <Paragraph type="secondary">
                                    ⏱ {movie.duration} phút
                                </Paragraph>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
