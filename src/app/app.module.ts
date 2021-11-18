import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { Home, Edit2, Trash2, Users, BarChart2, TrendingUp, Tool } from 'angular-feather/icons';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorService } from './interceptor/interceptor.service';
import { AppRoutes } from './app-routing.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from '@layout/full/full.component';
import { SpinnerComponent } from '@layout/spinner/spinner.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { VerticalSidebarComponent } from '@layout/vertical-sidebar/vertical-sidebar.component';
import { VerticalNavigationComponent } from '@layout/vertical-header/vertical-navigation.component';

import { AuthGuard } from '@guard/auth.guard';

// Select some icons (use an object, not an array)
const icons = { Home, Edit2, Trash2, Users, BarChart2, TrendingUp, Tool };

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    BlankComponent,
    BreadcrumbComponent,
    VerticalNavigationComponent,
    VerticalSidebarComponent,
    FullComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FeatherModule,
    FeatherModule.pick(icons),
    RouterModule.forRoot(AppRoutes),
    PerfectScrollbarModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
