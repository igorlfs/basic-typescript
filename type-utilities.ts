type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

const todo: Readonly<Todo> = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false
};

console.log(todo);

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};

type todoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
