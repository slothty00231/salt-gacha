import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
import { Gacha } from "../gacha";
import { Input } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-ten",
  templateUrl: "./ten.component.html",
  styleUrls: ["./ten.component.css"]
})
export class TenComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  @Input() gacha: Gacha;
  random: string;
  randomNumber: number[] = [];

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.onDisplay2(i);
    }
  }

  onDisplay2(varr: number) {
    this.randomNumber[varr] = Math.round(Math.random() * 3);
    this.random = this.gacha.item[this.randomNumber[varr]];
    console.log("random num :", this.randomNumber[varr]);
    console.log(this.random);
  }

  next() {
    this.firebaseService.addLast(
      [this.randomNumber[0],
      this.randomNumber[1],
      this.randomNumber[2],
      this.randomNumber[3],
      this.randomNumber[4],
      this.randomNumber[5],
      this.randomNumber[6],
      this.randomNumber[7],
      this.randomNumber[8],
      this.randomNumber[9]]);
  }
}
