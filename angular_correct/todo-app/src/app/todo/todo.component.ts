import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  task = '';
  tasks: string[] = [];
  editIndex = -1;

  addTask() {
    if (this.task.trim() === '') return;

    if (this.editIndex === -1) {
      this.tasks.push(this.task);
    } else {
      this.tasks[this.editIndex] = this.task;
      this.editIndex = -1;
    }
    this.task = '';
  }

  editTask(i: number) {
    this.task = this.tasks[i];
    this.editIndex = i;
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}