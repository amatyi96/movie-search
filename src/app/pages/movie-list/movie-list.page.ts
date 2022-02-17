import {Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {first, Observer} from "rxjs";
import {MovieListItem, MovieListResponse} from "../../utils/movieListResponse";
import {GenreListItem, GenreListResponse} from "../../utils/genreListResponse";

@Component({
    selector: 'app-movie-list-page',
    templateUrl: 'movie-list.page.html',
    styleUrls: ['movie-list.page.scss']
})
export class MovieListPage {

    public searchControl: FormControl = new FormControl('', Validators.minLength(3));
    public movieList: MovieListResponse | undefined;
    private genreList: Array<GenreListItem> = [];

    constructor(private $movieService: MovieService) {
        this.getGenreList();
    }

    public searchMovie(query: string, page: number = 1): void {
        if (this.searchControl.hasError('minlength') || !this.searchControl.value.length) {
            this.movieList = undefined;
            return;
        }

        const movieListObserver: Observer<MovieListResponse> = {
            next: (response: MovieListResponse) => this.movieList = response,
            error: (error: Error) => console.log(error),
            complete: () => {}
        };

        this.$movieService.searchMovie(query, page).pipe(first()).subscribe(movieListObserver);
    }

    public getMovieImageUrl(movieListItem: MovieListItem): string {
        return this.$movieService.getMovieImageUrl(movieListItem.backdrop_path, 150, 225);
    }

    private getGenreList(): void {
        const genreListObserver: Observer<GenreListResponse> = {
            next: (response: GenreListResponse) => this.genreList = response.genres,
            error: (error: Error) => console.log(error),
            complete: () => {}
        };

        this.$movieService.getGenreList().pipe(first()).subscribe(genreListObserver);
    }

    public findGenre(genreId: number): string {
        return this.genreList.find((genreListItem) => genreListItem.id === genreId)?.name ?? '';
    }
}
