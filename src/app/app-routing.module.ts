import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { AccountComponent } from "./account/account.component";
import { MessageComponent } from "./message/message.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "messages", component: MessageComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "settings", component: SettingsComponent },
  { path: "account", component: AccountComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
