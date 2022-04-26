import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorOneComponent } from './404/404-error.component';
import { ErrorTwoComponent } from './500/500-error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorRoutingModule
  ],
  declarations: [ErrorOneComponent, ErrorTwoComponent]
})
export class ErrorModule { }
