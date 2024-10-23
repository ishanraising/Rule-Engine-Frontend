import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RuleService {
  private apiUrl = 'http://localhost:8081/rule'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to create a rule
  createRule(ruleData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createrule`, ruleData);
  }

  getAllRules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allrules`);
  }

  evaluateRule(evaluationData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/evaluate`, evaluationData);
  }
}
