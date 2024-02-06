export interface Cards {
  img: "https://image.tmdb.org/t/p/w500/{{ cards.poster_path}}"
  id: number;
  title: string;
  genre_ids: [number, string];
}