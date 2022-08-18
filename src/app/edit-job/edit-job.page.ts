import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { InternshipJobService } from './../shared/internship-job.service';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.page.html',
  styleUrls: ['./edit-job.page.scss'],
})
export class EditJobPage implements OnInit {
  updateJobForm: FormGroup;
  id: any;
  constructor(
    private Job: InternshipJobService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder

  ) { 
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this.Job.getJob(this.id).valueChanges().subscribe(res=>{
      this.updateJobForm.setValue(res);
    })
  }

  ngOnInit() {
    this.updateJobForm=this.fb.group({
      Company:[''],
      Position:[''],
      Duration:[''],
    })
    console.log(this.updateJobForm.value)
  }
  
  updateForm(){
    this.Job.updateJob(this.id, this.updateJobForm.value)
    .then(()=>{
      this.router.navigate(['/job-list']);
    })
    .catch(error => console.log(error));
  }

}
