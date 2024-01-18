import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import  { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import  { Router } from '@angular/router';
import  { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { RequesterService } from 'src/app/shared/services/requester.service';
// import  { SharedSnackbarService } from 'src/app/shared/snackbar/shared-snackbar.service';
// import  { TokenService } from '../token.service';
// import  { AuthService } from '../auth.service';

@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;

  passwordHide = true;

  constructor(
    // private authService: AuthService,
    // private snack: SharedSnackbarService,
    // private tokenService: TokenService,
    private fb: FormBuilder,
    private router: Router,
    private snack: MatSnackBar,
    private authService: AuthService,
    private request: RequesterService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {

    // if (this.authService.isLogin()) {
    //   this.router.navigate(['']);
    // }
  }

  loginForm: any = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  logIn(): void {

    this.isLoading =true

    this.authService.login(this.loginForm.value)
    .subscribe({
      next: (_) => {
        this.router.navigate(['/']);
        // this.isSubmitting = false;
      },
      error: (err: any) => {
        let errMessage = err?.error?.error || err?.message
        // this.isSubmitting = false;
        this.snack.open(errMessage || "Login Failed!", "Close", {
          duration: 6000
        })
      }
    })
  }

  logout(): void {
    this.request.logout();
  }
}
