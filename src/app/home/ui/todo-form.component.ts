import { Component, EventEmitter, Output, inject } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { CreateTodo } from "../../shared/interfaces/todo";

@Component ({
    standalone: true,
    selector: 'app-todo-form',
    imports: [ReactiveFormsModule],
    template: `
        <form
         [formGroup]="todoForm"
         (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())">
            <input type="text" formControlName="title" placeholder="Introduzca una tarea">
            <input
                type="text"
                formControlName="description"
                placeholder="Introduzca una descripción"
                />
            <button [disabled]="!todoForm.valid" type="submit">Guardar</button>
            </form>`,
})

export class TodoFormComponent {
    private formBuilder = inject(FormBuilder)

    todoForm = this.formBuilder.nonNullable.group({
        title: ['', Validators.required],
        description: [''],
    });

    @Output() todoSubmitted = new EventEmitter<CreateTodo>();
}