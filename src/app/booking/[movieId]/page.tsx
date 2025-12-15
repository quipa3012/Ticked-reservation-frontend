import BookingPage from '@/components/booking/BookingPage';

interface PageProps {
    params: Promise<{
        movieId: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const { movieId } = await params;
    const movieIdNumber = Number(movieId);

    return <BookingPage movieId={movieIdNumber} />;
}
