import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { RuleService } from '../../services/ruleservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../app.component';

// Custom validator for operator
function operatorValidator(control: AbstractControl) {
  const validOperators = ['AND', 'OR'];
  return validOperators.includes(control.value) ? null : { invalidOperator: true };
}

// Custom validator for conditions
function conditionValidator(control: AbstractControl) {
  const conditionPattern = /^(age|department|salary|experience)\s*([<>=]+)\s*(\d+)$/;
  return conditionPattern.test(control.value) ? null : { invalidCondition: true };
}

@Component({
  selector: 'app-createrule',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule,HttpClientModule,AppComponent],
  templateUrl: './createrule.component.html',
  styleUrls: ['./createrule.component.css'],
 
})
export class CreateruleComponent {
  ruleForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private ruleService: RuleService) {
    this.ruleForm = this.fb.group({
      condition1: ['', [Validators.required, conditionValidator]], // Add condition validator
      operator: ['', [Validators.required, operatorValidator]], // Add the custom operator validator
      condition2: ['', [Validators.required, conditionValidator]]  // Add condition validator
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.ruleForm.valid) {
      const { condition1, operator, condition2 } = this.ruleForm.value;
      const rule = `${condition1} ${operator} ${condition2}`;
      
      this.ruleService.createRule({ rule }).subscribe(
        (response) => {
          this.successMessage = 'Rule created successfully!';
          this.errorMessage = '';
          this.ruleForm.reset(); // Reset the form after successful submission
        },
        (error) => {
          this.errorMessage = 'Error creating rule: ' + error.message;
          this.successMessage = '';
        }
      );
    }
  }
}


// RouterLink, CommonModule, ReactiveFormsModule,AppComponent,RouterModule,HttpClientModule