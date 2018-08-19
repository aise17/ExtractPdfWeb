import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasePageComponent } from './base-page/base-page.component'
import { IndexComponent } from './index/index.component'

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'ocr', component: BasePageComponent },
  { path: 'index', component: IndexComponent },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}