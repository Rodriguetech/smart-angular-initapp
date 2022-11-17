import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from 'src/app/modules/errors/errors-routing.module';
import { ErrorsComponent } from 'src/app/modules/errors/errors.component';
import { Error404Component } from 'src/app/modules/errors/error404/error404.component';
import { Error500Component } from 'src/app/modules/errors/error500/error500.component';


@NgModule({
  declarations: [
    ErrorsComponent,
    Error404Component,
    Error500Component
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
