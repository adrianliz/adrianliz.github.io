import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BioComponent } from './components/bio/bio.component';
import { CardsInfoComponent } from './components/cards-info/cards-info.component';
import { HeaderComponent } from './components/header/header.component';
import { LinksComponent } from './components/links/links.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    CardsInfoComponent,
    BioComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot(environment.GOOGLE_TRACKING_ID)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
