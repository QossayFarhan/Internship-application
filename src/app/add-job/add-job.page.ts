import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { InternshipJobService } from './../shared/internship-job.service';
import { intrenshipJob } from '../shared/intrenship-job';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.page.html',
  styleUrls: ['./add-job.page.scss'],
})
export class AddJobPage implements OnInit {
  Jobs =[];
  addJobForm: FormGroup;
  constructor(
    private jobService: InternshipJobService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.addJobForm = this.fb.group({
      Company: [''],
      Position: [''],
      Duration: ['']
    })

    let JobsRes = this.jobService.getJobList();
    JobsRes.snapshotChanges().subscribe(res => {
      this.Jobs = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Jobs.push(a as intrenshipJob);
      })
    })
  }
  formSubmit() {
    if (!this.addJobForm.valid) {
      return false;
    } else {
      this.jobService.createJob(this.addJobForm.value).then(res => {
        console.log(res)
        this.addJobForm.reset();
        this.router.navigate(['/folder']);
      })
        .catch(error => console.log(error));
    }
  }
}
