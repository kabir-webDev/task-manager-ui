import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, pipe } from 'rxjs';
import { map, switchMap, tap, take } from "rxjs/operators"
// import { AuthService } from 'src/app/auth/auth.service';
import { HttpService } from './http.service';

@Injectable()
export class PermissionService {
  // private userPermissions = new BehaviorSubject<string[]>([])
  // userPermissions$: Observable<string[]> = this.userPermissions.asObservable()

  // constructor(private http: HttpService, private authService: AuthService, private snackbar: MatSnackBar) { }

  // getPermissions(force: boolean = false): Observable<string[]> {
  //   return this.userPermissions$.pipe(switchMap((permissions: string[]) => {
  //     if (!permissions.length || force) {
  //       return this.fetchUserPermissions()
  //     }
  //     return of(permissions)
  //   }))
  // }

  // get userPermissionsSnapshot(): string[] {
  //   return this.userPermissions.value
  // }

  // loadUserPermissions(permissions: string[]): void {
  //   this.userPermissions.next(permissions)
  // }

  // hasAuthorities$(permissions: string[] | string): Observable<boolean> {
  //   return this.getPermissions().pipe(map(
  //     (userPermissions: string[]) => {
  //       if (this.authService.isAdminUser) {
  //         return true
  //       }
  //       const _perms: string[] = typeof permissions === "string" ? [permissions] : permissions
  //       const _userPermissions: string[] = userPermissions || [];
  //       return _perms.some((perm: string) => userPermissions.includes(perm))
  //     }
  //   ))
  // }

  // // Permission Check methods
  // hasAuthorities(permissions: string[] | string): boolean {
  //   if (this.authService.isAdminUser) {
  //     return true
  //   }
  //   const _perms: string[] = typeof permissions === "string" ? [permissions] : permissions
  //   const userPermissions: string[] = this.userPermissionsSnapshot || [];
  //   return _perms.some((perm: string) => userPermissions.includes(perm))
  // }

  // // Dep
  // fetchUserPermissions(): Observable<string[]> {
  //   return this.http.get("access/permission").pipe(map(res => {
  //     let _permissions: string[] = ["*"]
  //     Object.entries(res?.data).map(([_, value]) => {
  //       if (value instanceof Array && value.length) {
  //         value.forEach(item => {
  //           _permissions.push(item.name)
  //         })
  //       }
  //     })
  //     if (!_permissions.includes("CONTROL_PLANE_ACCESS")) {
  //       this.authService.logout()
  //       this.snackbar.open("You have no permission to access control panel", "Close", { duration: 5000, panelClass: ['snackbar-dark'] })
  //       return []
  //     }
  //     this.loadUserPermissions(_permissions)
  //     return _permissions
  //   }))
  // }
}
