import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Meu catálogo de filmes</h1>
      <Link href="/busca">Ir para a Busca</Link>
    </main>
  );
}
