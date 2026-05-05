import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
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

  editTask(index: number) {
    this.task = this.tasks[index];
    this.editIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}