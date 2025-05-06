import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headersInterceptor } from '../Core/Interceptors/headers.interceptor';
import { spinnerInterceptor } from '../Core/Interceptors/spinner.interceptor';
import { errorInterceptor } from '../Core/Interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withHashLocation(),
      withViewTransitions(),
      withInMemoryScrolling({
       scrollPositionRestoration : 'top'
      }),
    ),
    provideHttpClient(withFetch(),withInterceptors([headersInterceptor,spinnerInterceptor,errorInterceptor])),
    provideAnimations(),
    provideAnimationsAsync(),
    provideToastr()
    ]
};
