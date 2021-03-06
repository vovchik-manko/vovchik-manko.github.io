import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesAdminComponent } from "./tables-admin.component";

const routes: Routes = [
  {
    path: '',
    component: TablesAdminComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/tables/tables-admin/order-form/order-form.module#OrderFormModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class TablesAdminRoutingModule {}

/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
