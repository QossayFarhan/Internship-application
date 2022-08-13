import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { intrenshipJob } from '../shared/intrenship-job';
import { InternshipJobService } from '../shared/internship-job.service';

@Component({
  selector: 'app-folder',
  templateUrl: './jobList.page.html',
  styleUrls: ['./jobList.page.scss'],
})
export class JobListPage implements OnInit {
  Jobs = [];
  constructor(
    private jobsevice: InternshipJobService
  ) { }
  ngOnInit() {
    this.fetchJobs();
    let JobsRes = this.jobsevice.getJobList();
    JobsRes.snapshotChanges().subscribe(res => {
      this.Jobs = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Jobs.push(a as intrenshipJob);
      })
    })
  }
  fetchJobs() {
    this.jobsevice.getJobList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  deleteJob(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.jobsevice.deleteJob(id)
    }
  }
}
