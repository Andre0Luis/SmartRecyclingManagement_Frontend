import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { HorizontalHeaderComponent } from './main-layout/horizontal-header/horizontal-header.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { SearchModule } from '../shared-components/search/search.module';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FooterComponent } from '../shared-components/footer/footer.component';
import { CustomizerComponent } from '../customizer/customizer.component';
import { SharedDirectivesModule } from '../shared/directives/shared-directives.module';
import { FormsModule } from '@angular/forms';

const components = [
    HeaderComponent,
    HorizontalHeaderComponent,
    SidebarComponent,
    FooterComponent,
    CustomizerComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    PerfectScrollbarModule,
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
