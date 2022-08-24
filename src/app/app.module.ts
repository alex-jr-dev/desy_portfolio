import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/body/card/card.component';
import { Clo3dCollectionComponent } from './components/clo3d-collection/clo3d-collection.component';
import { FullPageComponent } from './components/full-page/full-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ManCollectionComponent } from './components/man-collection/man-collection.component';
import { WomanCollectionComponent } from './components/woman-collection/woman-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    FullPageComponent,
    HeaderComponent,
    BodyComponent,
    CardComponent,
    WomanCollectionComponent,
    ManCollectionComponent,
    Clo3dCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
