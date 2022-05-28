export interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  time: string;
}

export interface ITodosState {
  todos: ITodoItem[];
}

const defaultState: ITodosState = {
  todos: [],
};

export const todosReducer = (
  state = defaultState,
  action: any
) => {
  if (action.type === "ADD_TODO") {
    const date = new Date();
    const newTodo = {
      id:
        "id" +
        Math.random().toString(16).slice(2),
      text: action.text,
      completed: false,
      time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };
    const newTodos = [...state.todos, newTodo];
    return {
      todos: newTodos,
    };
  }
  if (
    (action.type === "DELETE_TODO", action.id)
  ) {
    const newTodos = state.todos.filter(
      (todo) => todo.id !== action.id
    );
    return {
      todos: newTodos,
    };
  }
  return state;
};
