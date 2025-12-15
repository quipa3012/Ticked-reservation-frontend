import MovieDetail from '@/components/movie/MovieDetail';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function MovieDetailPage({ params }: PageProps) {
    const { id } = await params;

    return <MovieDetail movieId={Number(id)} />;
}
