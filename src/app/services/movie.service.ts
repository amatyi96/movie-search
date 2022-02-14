import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {MovieListResponse} from "../utils/movieListResponse";
import {GenreListResponse} from "../utils/genreListResponse";
import {MovieDetailsResponse} from "../utils/movieDetailsResponse";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private static readonly GenreListUrl: string = `${environment.apiUrl}/genre/movie/list`;
    private static readonly SearchMovieUrl: string = `${environment.apiUrl}/search/movie`;
    private static readonly MovieDetailsUrl: string = `${environment.apiUrl}/movie`;

    constructor(private httpClient: HttpClient) {}

    public getGenreList(): Observable<GenreListResponse> {
        let httpParams = new HttpParams({
            fromObject: {api_key: environment.apiKey, language: environment.language}
        });

        return this.httpClient.get<GenreListResponse>(MovieService.GenreListUrl, {params: httpParams});
    }

    public searchMovie(query: string, page: number): Observable<MovieListResponse> {
        let httpParams = new HttpParams({
            fromObject: {api_key: environment.apiKey, language: environment.language, query: query, page: page}
        });

        return this.httpClient.get<MovieListResponse>(MovieService.SearchMovieUrl, {params: httpParams});
    }

    public getMovieDetails(id: number): Observable<MovieDetailsResponse> {
        let httpParams = new HttpParams({
            fromObject: {api_key: environment.apiKey, language: environment.language}
        });

        return this.httpClient.get<MovieDetailsResponse>(`${MovieService.MovieDetailsUrl}/${id}`, {params: httpParams});
    }

    public getMovieImageUrl(backdrop_path: string, width: number, height: number): string {
        return `${environment.imgApiUrl}/w${width}_and_h${height}_bestv2/${backdrop_path}`;
    }
}
