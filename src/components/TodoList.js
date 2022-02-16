import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  handleChangeProps,
  deleteTodoProps,
  updatedTitleProps,
}) => (
  <div>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        updatedTitleProps={updatedTitleProps}
      />
    ))}
  </div>
);

export default TodoList;
