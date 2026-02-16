import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { SinglePostComponent } from './shared/components/single-post/single-post.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostDashboardComponent,
    PostCardComponent,
    PostFormComponent,
    SinglePostComponent,
    GetConfirmComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
