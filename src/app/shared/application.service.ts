import { Injectable } from '@angular/core';
import { application } from '../shared/application';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
  
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService { 

  intrenshipListRef: AngularFireList<any>;
  intrenshipRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase ) {}
  
  createApplication(app: application) {
    return this.intrenshipListRef.push({
      Company: app.company,
      Position: app.job,
      Student: app.student,
      Status: "pending"
    });
  }

  // Get Single
  getJob(id: string) {    
    this.intrenshipRef = this.db.object('/application/' + id);
    return this.intrenshipRef;
  }
  // Get List
  getJobList() {
    this.intrenshipListRef = this.db.list('/application');
    return this.intrenshipListRef;
  }
  // Apply
  applyJob(id, app: application) {
    return this.intrenshipListRef.push({
      company: app.company,
      josition: app.job,
      student: app.student
    });
  }
  // Delete
  deleteJob(id: string) {
    
     this.intrenshipRef = this.db.object('/application/' + id);
     
     this.intrenshipRef.remove();
  }

  acceptApplication(app: application, isAccept){
    this.getJob(app.$key);
    return this.intrenshipRef.update({
      Status: isAccept? "accepted": "rejected"
  });
  }
}







