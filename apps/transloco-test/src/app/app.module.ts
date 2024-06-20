import { TranslocoRootModule } from '@angular-monorepo/transloco';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule.forRoot({}),
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
