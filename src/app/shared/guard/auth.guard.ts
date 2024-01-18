import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RequesterService } from '../services/requester.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private requester: RequesterService, private router: Router, private snackbar: MatSnackBar) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('here',this.requester.userDataSnapshot)
    const userData = this.requester.userDataSnapshot?.userData;
    if (!this.requester.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    if (userData?.userId) {
      return true;
    }
    
    this.requester.logout();
    this.snackbar.open("You are not permitted to access this resources!", "Close", {
      duration: 80000
    })
    return false
  }

}
