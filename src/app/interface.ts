export interface Cards {
  poster_path: string;
  id: number;
  title: string;
  release_date: number; 
  genre_ids: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Detail {
  poster_path: string;
  id: number;
  title: string;
  release_date: string;
  genre_ids: Genre[];
  overview: string;
  vote_average: number;
  vote_count: number;
}

