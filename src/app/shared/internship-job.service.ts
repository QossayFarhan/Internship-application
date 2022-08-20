import { Injectable } from '@angular/core';
import { intrenshipJob } from '../shared/intrenship-job';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
  
} from '@angular/fire/compat/database';




@Injectable({
  providedIn: 'root'
})
export class InternshipJobService {

  intrenshipListRef: AngularFireList<any>;
  intrenshipRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase ) {}
  // Create
  createJob(Job: intrenshipJob) {
    return this.intrenshipListRef.push({
      Company: Job.Company,
      Position: Job.Position,
      Duration: Job.Duration,
    });
  }
  // Get Single
  getJob(id: string) {    
    this.intrenshipRef = this.db.object('/internshipJob/' + id);
    return this.intrenshipRef;
  }
  // Get List
  getJobList() {
    this.intrenshipListRef = this.db.list('/internshipJob');
    return this.intrenshipListRef;
  }
  // Update
  updateJob(id, Job: intrenshipJob) {
    return this.intrenshipRef.update({
      Company: Job.Company,
      Position: Job.Position,
      Duration: Job.Duration,
    });
  }
  // Delete
  deleteJob(id: string) {
    
     this.intrenshipRef = this.db.object('/internshipJob/' + id);
     
     this.intrenshipRef.remove();
  }

  acceptApplication(id, Job: intrenshipJob){
    Job.Company = "accepted"
  }
}

