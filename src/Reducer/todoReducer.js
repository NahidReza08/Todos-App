export default function todoReducer(state, action) {
  const {todo,todos,todoCount,todoForm} = state;
  switch (action.type) {
    case "createTodo": {
      const todo = action.value;
      const copyTodos = [...todos];
      const date = new Date();
      const newTodo = {
        ...todo,
        id: `${date.getTime()}${Math.floor(Math.random() * 10000000)}`,
      };
      copyTodos.push(newTodo);
      return {
          ...state,
          todos:copyTodos,
          todoCount: todoCount+1,
          todoForm: false,
      }
    }
    case "removeTodo": {
      const id = action.value;
      const copyTodos = todos.filter((todo) => todo["id"] !== id);
      return {
          ...state,
          todos: copyTodos,
          todoCount: todoCount - 1,
      }
    }
    case "updateTodo": {
      const updatedTodo = action.value;
      const { id } = updatedTodo;
      const copyTodos = [...todos];
      const index = copyTodos.findIndex((todo) => todo["id"] === id);
      if (index !== -1) {
        copyTodos[index] = updatedTodo;
      }
      else{
          alert("Todo is no longer available.");
      }
      return {
          ...state,
          todos: copyTodos,
      }
    }
    case "setTodoForm": {
        return {
            ...state,
            todoForm: action.value,
        }
    }
    default:
        return state;
  }
}
