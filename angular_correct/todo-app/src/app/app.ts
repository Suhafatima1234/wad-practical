import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent, FormsModule],
  template: `<app-todo></app-todo>`
})
export class AppComponent {}