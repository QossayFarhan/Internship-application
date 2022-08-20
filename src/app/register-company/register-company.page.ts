import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CompanyOperationService } from '../shared/company-operation.service';
import { companyOperation } from '../shared/companyOperation';
@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.page.html',
  styleUrls: ['./register-company.page.scss'],
})
export class RegisterCompanyPage implements OnInit {
  Accounts=[];
  AccountForm:FormGroup;

  constructor(
    private aptService: CompanyOperationService,
    private router: Router,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.AccountForm = this.fb.group({
      name:[''],
      email:[''],
      password:[''],
    })

    let AccountRes = this.aptService.getAccountList();
    AccountRes.snapshotChanges().subscribe(res => {
      this.Accounts = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Accounts.push(a as companyOperation);
      })
    })
    
  }

  formSubmit(){
    if(!this.AccountForm.valid){
      return false;
    } else {
      this.aptService.createAccount(this.AccountForm.value).then(res=>{
        console.log(res);
        this.AccountForm.reset();
        this.router.navigate(['/job-list']);
      })
      .catch(error=>console.log(error));
    }
  }

}
