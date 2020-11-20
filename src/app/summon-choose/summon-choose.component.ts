import { Component, OnInit} from "@angular/core";
import { Gacha } from "../gacha";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: 'app-summon-choose',
  templateUrl: './summon-choose.component.html',
  styleUrls: ['./summon-choose.component.css']
})

export class SummonChooseComponent implements OnInit {
  
  gacha: Gacha[];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getGacha().subscribe(val => {this.gacha = val;});
  }

}