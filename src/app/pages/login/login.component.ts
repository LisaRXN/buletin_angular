import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private loginSubscription: Subscription | null | undefined;
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private route = inject(Router);

  loginFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    this.loginSubscription = this.authService
      .login(this.loginFormGroup.value as Credential)
      .subscribe({
        next: (result: User | null | undefined) => {
          console.log('user logged');
          this.route.navigate(['home']);
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }
}
