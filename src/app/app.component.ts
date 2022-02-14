import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "./services/movie.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    private movieListSubscription: Subscription;
    private genreListSubscription: Subscription;
    private movieDetailsSubscription: Subscription;

    constructor(private $movieService: MovieService) {
        this.movieListSubscription = this.$movieService.searchMovie('games', 1).subscribe({
            next(response) {console.log(response);},
            error(error) {console.log(error);}
        });

        this.genreListSubscription = this.$movieService.getGenreList().subscribe({
            next(response) {console.log(response);},
            error(error) {console.log(error);}
        });

        this.movieDetailsSubscription = this.$movieService.getMovieDetails(70160).subscribe({
            next(response) {console.log(response);},
            error(error) {console.log(error);}
        });
    }

    public ngOnInit(): void {
        console.log(this.$movieService.getMovieImageUrl('/aIH9Cf1p0BCMAH7ijYWLvWCmVEr.jpg', 300, 450));
    }

    public ngOnDestroy(): void {
        this.movieListSubscription.unsubscribe();
        this.genreListSubscription.unsubscribe();
        this.movieDetailsSubscription.unsubscribe();
    }
}
