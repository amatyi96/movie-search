import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListPage} from "./pages/movie-list/movie-list.page";
import {MovieDetailsEntryComponent} from "./components/modal/movie-details-entry.component";

const routes: Routes = [
  {
    path: '',
    component: MovieListPage,
    children: [
      {
        path: ':id',
        component: MovieDetailsEntryComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
