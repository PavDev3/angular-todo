import { Component, inject } from "@angular/core";
import { TodoFormComponent } from "./ui/todo-form.component";
import { TodoService } from "../shared/data-access/todo-service";
import { TodoListComponent } from "./ui/todo-list.component";

@Component ({
    standalone: true,
    selector: 'app-home',
    imports: [TodoFormComponent, TodoListComponent],
    template: `<h1>ToDo Angular App</h1>
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />
    <app-todo-list [todos]="todoService.todos()" />`,
})

export class HomeComponent {
    todoService = inject(TodoService);
}