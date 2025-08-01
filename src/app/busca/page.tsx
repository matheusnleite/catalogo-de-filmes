"use client";

import { useState } from "react";
import MovieCard from "@/components/MovieCard";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function PaginaDeBusca() {
  const [termoBusca, setTermoBusca] = useState("");
  const [resultados, setResultados] = useState<Movie[]>([]);
  // 1. NOVO ESTADO
  const [pesquisaFeita, setPesquisaFeita] = useState(false);

  const handleSearch = async () => {
    if (termoBusca === "") {
      alert("Por favor, digite o nome de um filme.");
      return;
    }

    // 2. ATIVAÇÃO DO NOVO ESTADO
    setPesquisaFeita(true);

    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${termoBusca}&language=pt-BR`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResultados(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      alert("Houve um erro ao buscar os filmes. Tente novamente.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Busque por um Filme</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-black bg-white"
          placeholder="Ex: Matrix, Vingadores..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>

      {/* 3. NOVA ÁREA DE RESULTADOS COM LÓGICA CONDICIONAL */}
      <div className="mt-8 w-full text-center">
        {pesquisaFeita && resultados.length === 0 ? (
          <p className="text-gray-400">
            Nenhum resultado encontrado para sua busca.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resultados.map((filme) => (
              <MovieCard
                key={filme.id}
                title={filme.title}
                posterPath={filme.poster_path}
                releaseDate={filme.release_date}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
