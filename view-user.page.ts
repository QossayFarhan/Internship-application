import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/Users';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.page.html',
  styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage implements OnInit {
  Students=[];
  Supervisor=[];
  constructor( private aptService:UsersService) { }

  ngOnInit() {
    
    this.fetchStudents();
    let studentRes=this.aptService.getStudentList();
    studentRes.snapshotChanges().subscribe(res => {
      this.Students=[];
      res.forEach(item=>{
        let a = item.payload.toJSON();
        a['$key']= item.key;
        this.Students.push(a as Users);
      })
    })
  }

  fetchStudents(){
    this.aptService.getStudentList().valueChanges().subscribe(res=>{
      console.log(res);
    })
  }
  deleteStudent(id){
    console.log(id);
    if(window.confirm('Do you want to delete this student?')){
      this.aptService.deleteStudent(id);
    }

  }
}
