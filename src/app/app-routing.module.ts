import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { WomanCollectionComponent } from './components/woman-collection/woman-collection.component';

const routes: Routes = [
  { path: "", component: BodyComponent },
  { path: "woman-collection", component: WomanCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
