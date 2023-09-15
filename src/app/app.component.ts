import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  inputValue:string = "Initial Value";
  todos = [
    { id: 1, task: 'swimming',venue1:"marena",venue2:"sundar",completed:false },
    { id: 2, task: 'breakfast',venue1:"bread & eggs",venue2:"hostel",completed:false },
    { id: 3, task: 'office',venue1:"SMIT",venue2:"Out of Campus",completed:false }
  ];
  toggleTodoCompleted(todo: any) {
    todo.completed = !todo.completed;
  }
}

