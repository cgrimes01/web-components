import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";

import { WhatsThatFatherComponent } from './whatsthatfather.component';


@NgModule({
  declarations: [
    WhatsThatFatherComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    WhatsThatFatherComponent
  ],
  providers: [],
  bootstrap: [],
})
export class WhatsThatFatherModule { 

  constructor(private injector: Injector ) {
  }

  ngDoBootstrap() {
    const el = createCustomElement(WhatsThatFatherComponent, { injector: this.injector });
    customElements.define('whats-that-father', el);
  }
}
