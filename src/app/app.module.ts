import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsInfoComponent } from './components/cards-info/cards-info.component';
import { HeaderComponent } from './components/header/header.component';
import { LinksComponent } from './components/links/links.component';
import { BioComponent } from './components/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    CardsInfoComponent,
    BioComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
