export interface Cards {
  poster_path: object;
  id: number;
  title: string;
  release_date: number; 
}

export interface CardsDetail {
  poster_path: object;
  id: number;
  title: string;
  release_date: number; 
  genre_ids : number;
}