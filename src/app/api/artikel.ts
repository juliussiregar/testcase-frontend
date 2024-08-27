import { Artikel } from "@/types/artikel.types";

export async function fetchArtikel(): Promise<Artikel[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!res.ok) {
      throw new Error("Failed to fetch articles")
    }
    return res.json()
  }