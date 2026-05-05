import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  imports: [TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
}
