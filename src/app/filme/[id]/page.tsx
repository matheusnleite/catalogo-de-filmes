type PageProps = {
  params: {
    id: string;
  };
};

export default async function PaginaDetalheFilme({ params }: PageProps) {
  const { id } = await params;

  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`;

  const response = await fetch(url);
  const movieDetails = await response.json();

  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div
        className="relative rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-lg max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {movieDetails.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {movieDetails.overview}
          </p>
          <p className="mt-4">
            <strong>Data de Lançamento:</strong> {movieDetails.release_date}
          </p>
          <p>
            <strong>Nota Média:</strong> {movieDetails.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
}
