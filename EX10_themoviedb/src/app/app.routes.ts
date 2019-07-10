import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FilmComponent } from './components/film/film.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: 'search', component: SearchComponent },
    { path: 'film/:id/:page', component: FilmComponent },
    { path: 'film/:id/:page/:text', component: FilmComponent },
    { path: '', pathMatch : 'full', redirectTo: 'home' },
    { path: '**', pathMatch : 'full', redirectTo: 'home' },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
