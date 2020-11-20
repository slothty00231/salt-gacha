import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
import { Gacha } from "../gacha";
import { Input } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  @Input() gacha: Gacha;

  listName: number;
  a: string[]=['','','','','','','','','',''];

  ngOnInit() {
    this.gacha = { ...this.gacha };
    for (let i = 0; i < 10; i++) {
      if (this.gacha.lastpull[i] == -1) {
        this.a[i] = "";
        console.log(this.a[i]);
      } 
      else {
        this.a[i] = this.gacha.item[this.gacha.lastpull[i]];
        console.log(this.a[i]);
      }
    }
  }
}
