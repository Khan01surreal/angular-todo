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
    { id: 3, task: 'college',venue1:"SMIT",venue2:"Online",completed:false },
    { id: 4, task: 'shopping',venue1:"Singtam",venue2:"Rangpo",completed:false },
    { id: 5, task: 'reading',venue1:"SMIT Library",venue2:"Hostel",completed:false },
    { id: 6, task: 'dinner',venue1:"Mess",venue2:"Canteen",completed:false },
    { id: 3, task: 'screaming-chiyaaaaaahh',venue1:"SMIT",venue2:"Teesta",completed:false }
  ];
  toggleTodoCompleted(todo: any) {
    todo.completed = !todo.completed;
  }
}

