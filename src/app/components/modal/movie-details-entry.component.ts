import {Component} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MovieDetailsDialog} from "./movie-details.dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {first, Observer} from "rxjs";
import {MovieDetailsResponse} from "../../utils/movieDetailsResponse";
import {MovieService} from "../../services/movie.service";

@Component({
    template: ''
})
export class MovieDetailsEntryComponent {

    constructor(private dialog: MatDialog, private $movieService: MovieService, private route: ActivatedRoute, private router: Router) {
        const movieDetailsObserver: Observer<MovieDetailsResponse> = {
            next: (response: MovieDetailsResponse) => this.openMovieDetailsDialog(response),
            error: (error: Error) => {console.log(error); router.navigate([''])},
            complete: () => {}
        };

        this.$movieService.getMovieDetails(route.snapshot.params['id']).pipe(first()).subscribe(movieDetailsObserver);
    }

    private openMovieDetailsDialog(movieDetails: MovieDetailsResponse): void {
        const dialogRef: MatDialogRef<MovieDetailsDialog> = this.dialog.open(MovieDetailsDialog, {
            hasBackdrop: true,
            data: {
                movieDetails: movieDetails
            },
        });

        dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['']);
        });
    }
}
