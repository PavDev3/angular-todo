import { Component, inject } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

@Component ({
    standalone: true,
    selector: 'app-todo-form',
    imports: [ReactiveFormsModule],
    template: `
        <form [formGroup]="todoForm">
            <input type="text" formControlName="todo" placeholder="Introduzca una tarea">
            <input
                type="text"
                formControlName="description"
                placeholder="Introduzca una descripción"
                />
            <button type="submit">Guardar</button>
            </form>`,
})

export class TodoFormComponent {
    private formBuilder = inject(FormBuilder)

    todoForm = this.formBuilder.group({
        tittle: ['', Validators.required],
        description: [''],
    });
}