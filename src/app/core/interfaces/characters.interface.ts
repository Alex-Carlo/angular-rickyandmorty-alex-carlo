export interface Character {
  info: Info;
  results: Array<Result>;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Array<Origin>;
  location: Array<Location>;
  image: string;
  episode:[];
  url: string;
  created: string;
}

export interface Origin{
  name: string;
  url: string;
}

export interface Location{
  name: string;
  url: string;
}
