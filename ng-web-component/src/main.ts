import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WhatsThatFatherModule } from './app/whatsthatfather/whatsthatfather.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(WhatsThatFatherModule)
  .catch(err => console.error(err));
