import {GenreListItem} from "./genreListResponse";

export interface MovieDetailsResponse {
    id: number;
    adult: boolean,
    backdrop_path: string | null;
    belongs_to_collection: object | null;
    budget: number;
    genres: Array<GenreListItem>;
    homepage: string | null;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<ProductionCompanyListItem>;
    production_countries: Array<ProductionCountryListItem>;
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: Array<SpokenLanguageListItem>;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface ProductionCompanyListItem {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
}

interface ProductionCountryListItem {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguageListItem {
    iso_639_1: string;
    name: string;
}
