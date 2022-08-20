import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { InternshipJobService } from './../shared/internship-job.service';
import { ApplicationService } from './../shared/application.service';
import {application} from '../shared/application'


@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.page.html',
  styleUrls: ['./student-application.page.scss'],
})
export class StudentApplicationPage implements OnInit {
  application =[];
  applyJobForm: FormGroup;
  constructor(
    private app: ApplicationService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.applyJobForm=this.fb.group({
      company:[''],
      job:[''],
      student :['']
    })
    
    let JobsRes = this.app.getJobList();
    JobsRes.snapshotChanges().subscribe(res => {
      this.application = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.application.push(a as application);
      })
    })
  }

  formSubmit() {
    if (!this.applyJobForm.valid) {
      return false;
    } else {
      this.app.createApplication(this.applyJobForm.value).then(res => {
        console.log(res)
        this.applyJobForm.reset();
        this.router.navigate(['/validate-application']);
      })
        .catch(error => console.log(error));
    }
  }
  
  

}
