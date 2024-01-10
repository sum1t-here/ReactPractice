// step 2: create slice / reducer

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello' }],
};

export const todoSlice = createSlice({
  // this name will appear in redux extension
  name: 'todo',
  // second imp thing
  initialState,
  reducers: {
    // state and action are always accesible
    // state -> give access to current situation
    // actions -> provide essential values that are required
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  }, // takes up property and function
});

// export functionality to use in components
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
