import { Injectable } from '@angular/core';
import { Users } from '../shared/Users';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userListRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
  
  //Create Student
  createStudent(apt: Users){
    return this.userListRef.push({
      name: apt.name,
      email: apt.email,
      phone: apt.phone,
      password: apt.password,
      supervisor: apt.supervisor
    });
  }

  //Get 1 student
  getStudent(id:string){
    this.userRef=this.db.object('/student/' + id);
    return this.userRef;
  }

  //Get student list
  getStudentList(){
    this.userListRef = this.db.list('/student');
    return this.userListRef;
  }

  //Update student
  updateStudent(id, apt:Users){
    return  this.userRef.update({
      name:apt.name,
      email:apt.email,
      phone:apt.phone,
      supervisor:apt.supervisor
    })
  }

    //Delete student
  deleteStudent(id: string){
      this.userRef = this.db.object('/student/'+id);
      this.userRef.remove();
  }

    //Create Supervisor
  createSupervisor(apt: Users){
    return this.userListRef.push({
      name: apt.name,
      email: apt.name,
      phone: apt.phone,
      password: apt.password
    });
  }

  //Get 1 supervisor
  getSupervisor(id:string){
    this.userRef=this.db.object('/supervisor/' + id);
    return this.userRef;
  }

  //Get supervisor list
  getSupervisorList(){
    this.userListRef = this.db.list('/supervisor');
    return this.userListRef;
  }

  //Update supervisor
  updateSupervisor(id, apt:Users){
    return  this.userRef.update({
      name:apt.name,
      email:apt.email,
      phone:apt.phone,
    })
  }

  //Delete supervisor
  deleteSupervisor(id: string){
    this.userRef = this.db.object('/supervisor/'+id);
    this.userRef.remove();
  }

  



}
