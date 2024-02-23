export interface Cards {
  poster_path: string;
  id: number;
  title: string;
  release_date: number; 
  genre_ids: number;
  overview: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre{
  id:number;
  name: string;
}


