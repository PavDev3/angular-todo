import { Component, computed, inject } from "@angular/core";
import { TodoService } from "../shared/data-access/todo-service";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink, Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component ({
    standalone: true,
    selector: 'app-detail',
    imports: [RouterLink],
    template: `
        <h1>Detalle de la tarea</h1>
        @if (todo(); as todo){
            <h2>{{todo.title}}</h2> 
            <p>{{todo.description}}</p>
            <button class="remove" (click)="removeTodoById(todo.id)">Eliminar</button>
        } @else {
            <p>La tarea no existe</p>
        }

        
        <button (click)="handleBack()">Volver</button>
    `,
})

export class DetailComponent {
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    private todoService = inject(TodoService);
    private paramMap = toSignal(this.route.paramMap);

    todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );

  handleBack() {
    this.router.navigate(['/home']); 
    }

    removeTodoById(id: string) {
        this.todoService.removeTodoById(id);
        this.router.navigate(['/home']);
    }

    
}