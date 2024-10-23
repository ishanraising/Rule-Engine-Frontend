import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RuleService } from '../../services/ruleservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluaterule',
  templateUrl: './evaluaterule.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./evaluaterule.component.css']
})
export class EvaluateruleComponent implements OnInit {
  ruleForm: FormGroup;  // Declare the ruleForm
  rules: any[] = [];  // Array to store rules fetched from backend
  successMessage: string = '';  // Success message for rule creation
  errorMessage: string = '';  // Error message for any failures

  formFields: any = {
    department: false,
    age: false,
    salary: false,
    experience: false
  };

  constructor(private fb: FormBuilder, private ruleService: RuleService) {
    // Initialize the form with fields for rule, department, age, salary, and experience
    this.ruleForm = this.fb.group({
      rule: ['', Validators.required],
      department: [''],
      age: [''],
      salary: [''],
      experience: ['']
    });
  }

  ngOnInit(): void {
    this.fetchRules();  // Fetch the rules on initialization
  }

  // Fetch rules from backend
  fetchRules(): void {
    this.ruleService.getAllRules().subscribe(
      (response) => {
        // Parse the ruleString for each rule to extract the actual rule text
        this.rules = response.map((rule: any) => {
          try {
            // Parse the JSON-encoded rule string
            const parsedRule = JSON.parse(rule.ruleString);
            // Assuming the rule text is under a "rule" key
            return { ...rule, ruleString: parsedRule.rule };
          } catch (error) {
            console.error('Error parsing ruleString:', error);
            return rule;
          }
        });
        console.log(this.rules);  // Debug to ensure parsed rules are correct
      },
      (error) => {
        this.errorMessage = 'Error fetching rules: ' + error.message;
      }
    );
  }

  // Adjust form fields based on the selected rule
  onRuleChange(): void {
    const selectedRule = this.ruleForm.get('rule')?.value;

    // Reset visibility of all form fields
    this.formFields = {
      department: false,
      age: false,
      salary: false,
      experience: false
    };

    if (selectedRule) {
      // Enable fields based on rule conditions
      if (selectedRule.includes('department')) {
        this.formFields.department = true;
        this.ruleForm.get('department')?.setValidators(Validators.required);
      } else {
        this.ruleForm.get('department')?.clearValidators();
      }

      if (selectedRule.includes('age')) {
        this.formFields.age = true;
        this.ruleForm.get('age')?.setValidators(Validators.required);
      } else {
        this.ruleForm.get('age')?.clearValidators();
      }

      if (selectedRule.includes('salary')) {
        this.formFields.salary = true;
        this.ruleForm.get('salary')?.setValidators(Validators.required);
      } else {
        this.ruleForm.get('salary')?.clearValidators();
      }

      if (selectedRule.includes('experience')) {
        this.formFields.experience = true;
        this.ruleForm.get('experience')?.setValidators(Validators.required);
      } else {
        this.ruleForm.get('experience')?.clearValidators();
      }

      this.ruleForm.updateValueAndValidity();
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.ruleForm.valid) {
      // Create the evaluation data in the required format
      // console.log(this.ruleForm.get('rule'))
      // console.log(this.ruleForm.get('age'))
      // console.log(this.ruleForm.get('salary'))
      // console.log(this.ruleForm.get('department'))
      const evaluationData = {
        rule: this.ruleForm.get('rule')?.value,
        attributes: {
          age: this.ruleForm.get('age')?.value || null, // Use null if not provided
          experience: this.ruleForm.get('experience')?.value || null, // Use null if not provided
          department: this.ruleForm.get('department')?.value || null, // Use null if not provided
          salary: this.ruleForm.get('salary')?.value || null // Use null if not provided
        }
      };
        console.log("Data", evaluationData);
        console.log(typeof(evaluationData.rule));
      // Call the rule service to evaluate the rule
      this.ruleService.evaluateRule(evaluationData).subscribe(
        (response) => {
          const res = response ?'Valid':'Invalid' 
          this.successMessage = res;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Error evaluating rule: ' + error.message;
          this.successMessage = '';
        }
      );
    }
  }
}
