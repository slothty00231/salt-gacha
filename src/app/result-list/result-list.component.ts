import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
import { Gacha } from "../gacha";
import { Input } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-result-list",
  templateUrl: "./result-list.component.html",
  styleUrls: ["./result-list.component.css"]
})
export class ResultListComponent implements OnInit {
  gacha: Gacha[];
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  @Input()
  ngOnInit() {
    this.firebaseService.getGacha().subscribe(val => {
      this.gacha = val;
    });
  }
}
