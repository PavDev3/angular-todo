import { Injectable, signal } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Injectable({
    providedIn: 'root',
})

export class TodoService {
     // #todos es una propiedad privada que almacena la lista de todos. Se utiliza la función signal para crear un "observable" que puede ser observado para cambios.
    #todos = signal<Todo[]>([]);

    // La propiedad 'todos' es una versión de solo lectura de #todos que puede ser observada. Se obtiene utilizando el método asReadonly() proporcionado por la función signal.
    todos = this.#todos.asReadonly();

    // Método para agregar un nuevo todo a la lista de todos. Se utiliza el método update() proporcionado por la función signal para actualizar la lista de todos.
    addTodo(todo: Todo) {
        this.#todos.update(todos => [...todos, todo]);
    }
}