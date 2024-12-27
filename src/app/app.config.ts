import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
  provideExperimentalZonelessChangeDetection(),
  provideRouter(routes, withComponentInputBinding()),
  provideHttpClient(withFetch()),
  provideClientHydration()
 ]
  // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
  // este provideZoneChanges es para detectar bien los cambios y los eventos , lo cambiaremos por otro que en ves de zone  trabaje con otra cosa 
};
