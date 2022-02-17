import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MovieListPage } from "./pages/movie-list/movie-list.page";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InputComponent } from "./components/input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MovieDetailsEntryComponent } from "./components/modal/movie-details-entry.component";
import { MovieDetailsDialog } from "./components/modal/movie-details.dialog";
import { MatDialogModule } from "@angular/material/dialog";
import { FormatDatePipe } from "./pipes/format-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MovieListPage,
    InputComponent,
    MovieDetailsEntryComponent,
    MovieDetailsDialog,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
