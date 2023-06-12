import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizadorComponent } from './components/cotizador/cotizador.component';
import { HeaderComponent } from './components/cotizador/header/header.component';
import { UserInputComponent } from './components/cotizador/inputs/user-input.component';
import { CotizacionItemComponent } from './components/cotizador/cotizacion-item/cotizacion-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowCurrencyComponent } from './components/cotizador/show-currency/show-currency.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

-registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CotizadorComponent,
    HeaderComponent,
    UserInputComponent,
    CotizacionItemComponent,
    ShowCurrencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
