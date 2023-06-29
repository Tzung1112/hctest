import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./ToDoList"
const store = configureStore({
    reducer: {
        list: listSlice,
    },
});
export default store;
