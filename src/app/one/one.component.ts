import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service'
import { Router } from '@angular/router'
import { Gacha } from '../gacha';
import { Input } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    private firebaseService: FirebaseService,
    private router: Router){}
    
  @Input() gacha: Gacha;
  random: string
  randomNumber: number

  ngOnInit() {
    this.onDisplay1();
  }

  onDisplay1(){
    this.randomNumber = Math.round(Math.random()*3);
    this.random = this.gacha.item[this.randomNumber];
    console.log("random num :",this.randomNumber);
    console.log(this.random);
  }
  
  next() {
    this.firebaseService.addLast([this.randomNumber,-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  }
}