import { Component } from "@angular/core";
import { TodoFormComponent } from "./ui/todo-form.component";

@Component ({
    standalone: true,
    selector: 'app-home',
    template: `<h1>ToDo Angular App</h1>
    <app-todo-form></app-todo-form>`,
    imports: [TodoFormComponent]
})

export class HomeComponent {
    constructor() {}
}