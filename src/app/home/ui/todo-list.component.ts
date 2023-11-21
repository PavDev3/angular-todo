import { Component, Input } from "@angular/core";
import { Todo } from "../../shared/interfaces/todo";
import { RouterLink } from "@angular/router";

@Component ({
    standalone: true,
    selector: 'app-todo-list',
    imports: [RouterLink],
    template: `
    <ul>
        @for (todo of todos; track todo.id){
            <li>
                <a routerLink="/detail/{{todo.id}}">{{todo.title}}</a>
            </li>
        } @empty {
            <li>No hay tareas</li>
        }
    </ul>
    `,

})

export class TodoListComponent {
    @Input({required: true}) todos!: Todo[];
}