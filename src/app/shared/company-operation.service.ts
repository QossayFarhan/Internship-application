import { Injectable , EventEmitter } from '@angular/core';
import { companyOperation } from './companyoperation';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class CompanyOperationService {

  AccountListRef: AngularFireList<any>;
  AccountRef: AngularFireObject<any>;

  id_holer:string="";

  constructor(private db: AngularFireDatabase) { }

  setId(id:string){
    //this.dataUpdated.emit(id);
    this.id_holer=id;
    return id;
  }

  getId(){
    return this.id_holer;
  }

  createAccount(apt: companyOperation){
    return this.AccountListRef.push({
      name: apt.name,
      email: apt.email,
      password: apt.password
    })
  }

  getAccount(id: string){
    this.AccountRef=this.db.object('/company/'+id);
    return this.AccountRef;
}

  getAccountList(){
    this.AccountListRef = this.db.list('/company');
    return this.AccountListRef;
  }

  deleteSomething(id:string,item:string){
    this.AccountRef=this.db.object('/company/' +id + '/' + item);
    this.AccountRef.remove();
  }

  findAccount(){
    this.AccountRef = this.db.object('/company');
    return this.AccountRef;
  }

  verifyAccountEmail(id){
    this.AccountRef = this.db.object('/company/'+id+'/email');
    return this.AccountRef;
  }

  verifyAccountPassword(id){
    this.AccountRef = this.db.object('/company/'+id+'/password');
    return this.AccountRef;
  }

}
