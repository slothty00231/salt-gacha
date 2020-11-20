import { Component, OnInit, VERSION } from "@angular/core";
import { Gacha } from "../gacha";
import { Input } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-wish-choose",
  templateUrl: "./wish-choose.component.html",
  styleUrls: ["./wish-choose.component.css"]
})
export class WishChooseComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private firebaseService: FirebaseService,
    private route: Router){}
    
  @Input() gacha: Gacha;


  ngOnInit() {

  }



  loadGacha() {}

  lastWish() {}

  nextWish() {}
}
