import { Injectable } from '@angular/core';
import { Operation } from '../shared/Operation';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
  snapshotChanges,
} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class OperationService {

  registerListRef: AngularFireList<any>;
  registerRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  //Create Account
  createAccount(apt: Operation){
    return this.registerListRef.push({
      companyName: apt.companyName,
      email: apt.email,
      password: apt.password,
      phone: apt.phone,
    });
  }
    // Get Single
    getAccount(id: string) {
      this.registerRef = this.db.object('/account/' + id);
      return this.registerRef;
    }

    // Get List
    getAccountList() {
      this.registerListRef = this.db.list('/account');
      return this.registerListRef;
    }
    // Update
    updateAccount(id, apt: Operation) {
      return this.registerRef.update({
        companyName: apt.companyName,
        email: apt.email
      });
    }
    // Delete
    deleteAccount(id: string) {
      this.registerRef = this.db.object('/account/' + id);
      this.registerRef.remove();
    }

    findAccount(){
      this.registerRef = this.db.object('/account');
      return this.registerRef;
    }

    getAccountEmail(id: string) {
      this.registerRef = this.db.object('/account/' + id + '/email');
      return this.registerRef;
    }

    getAccountPassword(id: string) {
      this.registerRef = this.db.object('/account/' + id + '/password');
      return this.registerRef;
    }

    getAccountName(id: string) {
      this.registerRef = this.db.object('/account/' + id + '/companyName');
      return this.registerRef;
    }
    

}