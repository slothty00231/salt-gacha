import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Gacha } from "./gacha";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getGacha() {
    let Docref = this.firestore.collection<Gacha>("gacha");
    return Docref.valueChanges();
  }

  addLast(array: number[]) {
    let ad = {
      lastpull: array
    };
    const ref = this.firestore
      .collection("gacha")
      .doc("Jean")
      .update(ad);
    return ref;
  }
}
