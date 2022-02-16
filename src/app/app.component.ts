import {Component, OnDestroy} from '@angular/core';
import {MovieService} from "./services/movie.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    private genreListSubscription: Subscription;

    constructor(private $movieService: MovieService) {
        this.genreListSubscription = this.$movieService.getGenreList().subscribe({
            next(response) {console.log(response);},
            error(error) {console.log(error);}
        });
    }

    public ngOnDestroy(): void {
        this.genreListSubscription.unsubscribe();
    }
}
