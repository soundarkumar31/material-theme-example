import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularmaterialModule } from "./angularmaterial.module";

import { AppComponent } from "./app.component";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  imports: [
    BrowserModule,
    FormsModule,
    PortalModule,
    ScrollingModule,
    AngularmaterialModule
  ]
})
export class AppModule {}
