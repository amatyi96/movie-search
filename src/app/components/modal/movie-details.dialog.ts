import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MovieDetailsResponse} from "../../utils/movieDetailsResponse";

export interface DialogData {
    movieDetails: MovieDetailsResponse;
}

@Component({
    selector: 'app-movie-details-dialog',
    templateUrl: 'movie-details.dialog.html'
})
export class MovieDetailsDialog {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
