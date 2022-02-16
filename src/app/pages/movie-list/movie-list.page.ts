import {Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {first, Observer} from "rxjs";
import {MovieListItem, MovieListResponse} from "../../utils/movieListResponse";

@Component({
    selector: 'app-movie-list-page',
    templateUrl: 'movie-list.page.html',
    styleUrls: ['movie-list.page.scss']
})
export class MovieListPage {

    public searchControl: FormControl = new FormControl('', Validators.minLength(3));
    public movieList: MovieListResponse | undefined;

    constructor(private $movieService: MovieService) {}

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
        if (!movieListItem.backdrop_path) {
            return '/assets/empty.png'
        }

        return this.$movieService.getMovieImageUrl(movieListItem.backdrop_path, 150, 225);
    }
}
