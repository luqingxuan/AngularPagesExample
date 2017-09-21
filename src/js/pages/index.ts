require('css/pages/index.css');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'modules/app/app.module';

// Enables Hot Module Replacement.
declare var module: any;
if (module.hot) {
    module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);

