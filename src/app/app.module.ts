import { MessageModule } from "./message/message.module";
import { AccountModule } from "./account/account.module";
import { HomeModule } from "./home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { WishlistModule } from "./wishlist/wishlist.module";
import { SettingsModule } from "./settings/settings.module";
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    HomeModule,
    WishlistModule,
    AccountModule,
    SettingsModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
