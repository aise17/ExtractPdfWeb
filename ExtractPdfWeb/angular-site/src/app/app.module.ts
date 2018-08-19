import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasePageComponent } from './base-page/base-page.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { FormOrcComponent } from './form-orc/form-orc.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { GoOcrComponent } from './go-ocr/go-ocr.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    MenuComponent,
    LogoComponent,
    FormOrcComponent,
    ExplicacionComponent,
    GoOcrComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
