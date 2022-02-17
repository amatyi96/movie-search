import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MovieDetailsResponse} from "../../utils/movieDetailsResponse";
import {MovieService} from "../../services/movie.service";

export interface DialogData {
    movieDetails: MovieDetailsResponse;
}

@Component({
    selector: 'app-movie-details-dialog',
    templateUrl: 'movie-details.dialog.html',
    styleUrls: ['movie-details.dialog.scss']
})
export class MovieDetailsDialog {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialogRef: MatDialogRef<MovieDetailsDialog>, private $movieService: MovieService) {}

    public getMovieImageUrl(width: number, height: number): string {
        return this.$movieService.getMovieImageUrl(this.data.movieDetails.backdrop_path, width, height);
    }

    public getImdbUrl(): string {
        return this.$movieService.getImdbUrl(this.data.movieDetails.imdb_id);
    }

    public close(): void {
        this.dialogRef.close();
    }
}
