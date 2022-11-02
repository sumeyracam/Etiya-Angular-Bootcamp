import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ListviewComponent } from './components/listview/listview.component';
import { LoadingInterceptor } from './interseptors/loading.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { SplitPipe } from './pipes/split.pipe';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, ListviewComponent, CreateFakeArrayPipe, SplitPipe, LoginComponent, HeaderComponent, FooterComponent, CardsComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}