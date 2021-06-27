import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { GateComponent } from './components/gate/gate.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlacementcompaniesComponent } from './components/placementcompanies/placementcompanies.component';
import { PlacementsComponent } from './components/placements/placements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';
import { FetchService } from './service/fetch.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { InsertdataComponent } from './components/insertdata/insertdata.component'; 
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    GateComponent,
    HomeComponent,
    NavbarComponent,
    PlacementcompaniesComponent,
    PlacementsComponent,
    LoginComponent,
    InsertdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    FlexLayoutModule
   
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
