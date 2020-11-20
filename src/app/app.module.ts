//module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

//firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "./environment";

//component
import { AppComponent } from "./app.component";
import { SummonChooseComponent } from "./summon-choose/summon-choose.component";
import { ResultListComponent } from "./result-list/result-list.component";
import { OneWishComponent } from "./one-wish/one-wish.component";
import { TenWishComponent } from "./ten-wish/ten-wish.component";
import { FirebaseService } from "./firebase.service";
import { AddWishComponent } from "./add-wish/add-wish.component";
import { HomeComponent } from "./home/home.component";
import { WishChooseComponent } from "./wish-choose/wish-choose.component";
import { OneComponent } from './one/one.component';
import { TenComponent } from './ten/ten.component';
import { ResultComponent } from './result/result.component';

//////////////

//service
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "one-wish", component: OneWishComponent },
      { path: "ten-wish", component: TenWishComponent },
      { path: "", component: SummonChooseComponent },
      { path: "result-list", component: ResultListComponent },
      { path: "summon-choose", component: SummonChooseComponent }
    ]),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [
    AppComponent,
    SummonChooseComponent,
    ResultListComponent,
    OneWishComponent,
    TenWishComponent,
    AddWishComponent,
    HomeComponent,
    WishChooseComponent,
    OneComponent,
    TenComponent,
    ResultComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule {}
