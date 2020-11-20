import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
import { Gacha } from "../gacha";
import { Input } from "@angular/core";

@Component({
  selector: "app-one-wish",
  templateUrl: "./one-wish.component.html",
  styleUrls: ["./one-wish.component.css"]
})
export class OneWishComponent implements OnInit {
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
