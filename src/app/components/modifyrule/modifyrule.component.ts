import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RuleService } from '../../services/ruleservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifyrule',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './modifyrule.component.html',
  styleUrls: ['./modifyrule.component.css']
})
export class ModifyRuleComponent implements OnInit {
  ruleForm: FormGroup;
  rules: any[] = []; // This will hold the list of rules from the backend
  successMessage: string = 'Rule Merged Successfully';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private ruleService: RuleService) {
    this.ruleForm = this.fb.group({
      rule1: ['', Validators.required],   // First dropdown (Rule 1)
      operator: ['', [Validators.required, Validators.pattern('^(AND|OR)$')]],  // Operator (AND or OR)
      rule2: ['', Validators.required]    // Second dropdown (Rule 2)
    });
  }

  ngOnInit(): void {
    this.fetchRules();  // Fetch rules when the component is initialized
  }

  // Fetch rules from the backend
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

  onSubmit() {
    if (this.ruleForm.valid) {
      const { rule1, operator, rule2 } = this.ruleForm.value;
      const newRule = `${rule1} ${operator} ${rule2}`;
      
      this.ruleService.createRule({ rule: newRule }).subscribe(
        (response) => {
          this.successMessage = 'Rule created successfully!';
          this.errorMessage = '';
          this.ruleForm.reset();
        },
        (error) => {
          this.errorMessage = 'Error creating rule: ' + error.message;
          this.successMessage = '';
        }
      );
    }
  }
}
