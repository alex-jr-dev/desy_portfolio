import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullPageComponent } from './components/full-page/full-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/body/card/card.component';
import { WomanCollectionComponent } from './components/woman-collection/woman-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    FullPageComponent,
    HeaderComponent,
    BodyComponent,
    CardComponent,
    WomanCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
