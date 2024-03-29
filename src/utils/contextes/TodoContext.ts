import React from "react";
import { Todo } from "../../App";

export interface TodoContextProps {
  todos: Todo[];
  todoIdForEdit: Todo["id"] | null;
  addTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
  changeTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  addTodo: () => {},
  deleteTodo: () => {},
  changeTodo: () => {},
  checkTodo: () => {},
  selectTodoIdForEdit: () => {},
});
