import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { Clo3dCollectionComponent } from './components/clo3d-collection/clo3d-collection.component';
import { ManCollectionComponent } from './components/man-collection/man-collection.component';
import { WomanCollectionComponent } from './components/woman-collection/woman-collection.component';

const routes: Routes = [
  { path: "", component: BodyComponent },
  { path: "woman-collection", component: WomanCollectionComponent },
  { path: "man-collection", component: ManCollectionComponent },
  { path: "clo3d", component: Clo3dCollectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
