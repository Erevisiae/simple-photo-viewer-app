import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FlickrService } from "./flickr.service";
import { ImageSearchComponent } from "./image-search/image-search.component";
import { ImageDetailsComponent } from "./image-details/image-details.component";
import { Routes, RouterModule } from "@angular/router";
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


const appRoutes: Routes = [
  { path: "details", component: ImageDetailsComponent },
  { path: "search", component: ImageSearchComponent },
  { path: "**", component: ImageSearchComponent }
];

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [AppComponent, ImageSearchComponent, ImageDetailsComponent, HeaderComponent, FooterComponent, PopupDialogComponent],
  bootstrap: [AppComponent,PopupDialogComponent],
  providers: [FlickrService]
})
export class AppModule {}
