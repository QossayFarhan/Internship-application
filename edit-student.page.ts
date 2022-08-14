import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UsersService } from '../shared/users.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {
  updateStudentForm: FormGroup;
  id: any;
  constructor(
    private aptService: UsersService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder

  ) { 
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getStudent(this.id).valueChanges().subscribe(res=>{
      this.updateStudentForm.setValue(res);
    })
  }

  ngOnInit() {
    this.updateStudentForm=this.fb.group({
      name:[''],
      email:[''],
      phone:[''],
      password:[''],
      supervisor:['']
    })
    console.log(this.updateStudentForm.value)
  }
  
  updateForm(){
    this.aptService.updateStudent(this.id, this.updateStudentForm.value)
    .then(()=>{
      this.router.navigate(['/view-user']);
    })
    .catch(error => console.log(error));
  }

}
