import { Component, ValueProvider } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CompanyOperationService } from '../shared/company-operation.service';
import { companyOperation } from '../shared/companyOperation';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {

  Accounts=[];
  email:string ="";
  password:string="";
  id:any;
  verifyid1:string="";
  //verifyid2:string="";

  constructor(
    private aptService: CompanyOperationService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(){}


  enterAccount(){
    console.log(this.email);
    console.log(this.password);

    let accountRes=this.aptService.getAccountList();
    accountRes.snapshotChanges().subscribe(res =>{
    this.Accounts=[];
      res.forEach(item=>{
        let a= item.payload.toJSON();
        a['$key']=item.key;
        this.Accounts.push(a as companyOperation);

        this.aptService.verifyAccountEmail(item.key).valueChanges().subscribe(emailres=>{
          if(this.email==emailres){
            this.verifyid1=item.key;
            console.log(this.verifyid1);

            this.aptService.verifyAccountPassword(item.key).valueChanges().subscribe(pasres=>{
              if(this.password==pasres){
                console.log("Login Success");
                this.id=this.verifyid1;
                this.aptService.setId(this.id);// here pass the id value to the service
                this.router.navigate(['/job-list']);
                //Route to main menu
              }
              else {
                console.log("Login Fail");
              }

            }) 

          } //can detect wrong password, but nothing while wrong email.
        })

      })
    })
    
  }


}
