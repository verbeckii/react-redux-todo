import { createReducer } from "@reduxjs/toolkit";
import { addCategory } from './actions';


let lastId = 3;

const defaultCategories = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'Work' },
  { id: 3, title: 'Buy list' }
]

export default createReducer(defaultCategories, {
  [addCategory.type]: (categories, action) => {
    categories.push({
      id: ++lastId,
      title: action.payload.title
    })
  }
});