import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Operation } from '../shared/Operation';
import { OperationService } from '../shared/operation-service.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  enterAccountForm: FormGroup;
  email: string = '';
  password: string = '';
  name: any;
  emailfound: boolean = false;
  passwordfound: boolean = false;
  id: any;

  Accounts = [];

  constructor(
    private aptService: OperationService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    let accountRes = this.aptService.getAccountList();
    accountRes.snapshotChanges().subscribe((res) => {
      this.Accounts = [];
      res.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Accounts.push(a as Operation);
      });
    });
  }

  enterAccount() {
    console.log(this.email);
    console.log(this.password);

    this.aptService
      .findAccount()
      .valueChanges()
      .subscribe((res) => {
        console.log(this.parseObject(res));
      });
  }

  parseObject(obj) {
    for (var key in obj) {
      this.aptService
        .getAccountEmail(key)
        .valueChanges()
        .subscribe((newres) => {
          this.emailfound = false;
          if (this.email == newres) {
            this.emailfound = true;
          }
        });

      this.aptService
        .getAccountPassword(key)
        .valueChanges()
        .subscribe((pasres) => {
          this.passwordfound = false;
          if (this.password == pasres) {
            this.passwordfound = true;
          }
          try {
            if (this.passwordfound == true && this.emailfound == true) {
              console.log('success!');
              this.aptService
                .getAccountName(key)
                .valueChanges()
                .subscribe((nameres) => {
                  console.log(nameres);
                });

              this.router.navigate(['/job-list']);
            }
          } catch (err) {
            if (err) throw err;
          }
        });
    }
  }
}
