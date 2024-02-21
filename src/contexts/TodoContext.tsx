import { createContext } from "react";
import { TodoItem } from "../model/TodoItem";

export interface ITodoProps {
    items: Map<number, TodoItem>,
    addingItem: boolean,
    setAddingItem: (addingItem: boolean) => void
    addItem: (item: TodoItem) => number,
    removeItem: (item: TodoItem) => boolean,
}

// Create the context with initial values
export const TodoContext = createContext<ITodoProps>({
    items: new Map<number, TodoItem>(),
    addingItem: false,
    setAddingItem: (addingItem: boolean) => {},
    addItem: (item: TodoItem) => -1,
    removeItem: () => false
});