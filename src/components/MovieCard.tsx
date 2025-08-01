interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
}

export default function MovieCard({
  title,
  posterPath,
  releaseDate,
}: MovieCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white flex flex-col">
      <img
        src={imageUrl}
        alt={`Pôster do filme ${title}`}
        className="w-full h-auto rounded-md mb-4"
      />
      <div className="flex flex-col flex-grow justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-400 mt-2">Lançamento: {releaseDate}</p>
      </div>
    </div>
  );
}
