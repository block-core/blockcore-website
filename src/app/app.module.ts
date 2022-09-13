import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { PlatformComponent } from "./platform/platform.component";
import { AboutComponent } from "./about/about.component";
import { ChainsComponent } from "./chains/chains.component";
import { NavFooterComponent } from "./nav-footer/nav-menu.component";
import { CreateChainComponent } from "./create-chain/create-chain.component";
import { DiscordComponent } from "./discord/discord.component";
import { PolicyComponent } from "./policy/policy.component";
import { WalletComponent } from "./wallet/wallet.component";

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      NavFooterComponent,
      HomeComponent,
      PlatformComponent,
      WalletComponent,
      PolicyComponent,
      AboutComponent,
      ChainsComponent,
      CreateChainComponent,
   ],
   imports: [
      BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(
         [
            { path: "", component: HomeComponent, pathMatch: "full" },
            { path: "platform", component: PlatformComponent },
            { path: "wallet", component: WalletComponent },
            { path: "chains", component: ChainsComponent },
            { path: "create-chain", component: CreateChainComponent },
            { path: "discord", component: DiscordComponent },
            { path: "policy", component: PolicyComponent },
            { path: "sponsors", component: AboutComponent }, // Backward compatible website URL.
            { path: "team", component: AboutComponent }, // Backward compatible website URL.
            { path: "about", component: AboutComponent },
         ],
         {
            scrollPositionRestoration: "enabled",
            anchorScrolling: "enabled",
            scrollOffset: [0, 0], // [x, y]
         }
      ),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
