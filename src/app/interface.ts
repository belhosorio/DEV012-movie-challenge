export interface Cards {
  img: "https://image.tmdb.org/t/p/w500/{{ cards.poster_path}}"	  
  poster_path: string;
   id: number;
  title: string;
  release_date: number; 
  genre_ids: number;
}

export interface Genre{
  id:number;
  name: string;
}


