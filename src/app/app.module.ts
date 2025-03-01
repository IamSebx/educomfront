import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopicoApiService } from 'src/api/topico-api/topico-api.service';
import { JwtInterceptorService } from 'src/api/jwt-api/jwt-interceptor.service';
import { ErrorInterceptorService } from 'src/api/error-interceptor-api/error-interceptor.service';
import {PremioApiService} from "../api/premio-api/premio-api.service";
import {MatDialogModule} from "@angular/material/dialog";
import {FlashcardApiService} from "../api/flashcard-api/flashcard-api.service";
import {MazoApiService} from "../api/mazo-api/mazo-api.service";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],

  providers: [
    TopicoApiService,
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService, multi:true},
    PremioApiService,
    FlashcardApiService,
    MazoApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
