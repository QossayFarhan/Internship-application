import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../shared/application.service';
import {application} from '../shared/application'


@Component({
  selector: 'app-validate-application',
  templateUrl: './validate-application.page.html',
  styleUrls: ['./validate-application.page.scss'],
})
export class ValidateApplicationPage implements OnInit {

  apps = [];
  constructor(
    private appsevice: ApplicationService
  ) { }
  ngOnInit() {
    this.fetchJobs();
    let JobsRes = this.appsevice.getJobList();
    JobsRes.snapshotChanges().subscribe(res => {
      this.apps = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.apps.push(a as application);
      })
    })
  }
  fetchJobs() {
    this.appsevice.getJobList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  accept(a, isAccept){
    // let JobsRes = this.appsevice.getJobList();
    // JobsRes.snapshotChanges().subscribe(res => {
    //   this.apps = [];
    //   res.forEach(item => {
    //     let a = item.payload.toJSON();
    //     a['$key'] = item.key;
    console.log(a);
    this.appsevice.acceptApplication(a as application, isAccept)
  // })
// })
 }
}


