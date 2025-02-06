import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private registerSubscription: Subscription | null = null;
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  registerFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    // confirmPassword: ['', Validators.required],
  });

  register() {
    this.registerSubscription = this.authService
      .register(this.registerFormGroup.value as Credential)
      .subscribe();
    console.log('registered');
  }

  ngOnDestroy() {
    this.registerSubscription?.unsubscribe();
  }
}
