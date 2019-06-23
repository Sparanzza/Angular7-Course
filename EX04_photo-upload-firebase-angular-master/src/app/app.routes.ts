import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { LoadPhotoComponent } from './components/load-photo/load-photo.component';

const routes: Routes = [
    { path: 'photos', component: PhotosComponent },
    { path: 'load', component: LoadPhotoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'photos' }
];

export const APP_ROUTES = RouterModule.forRoot(routes);
