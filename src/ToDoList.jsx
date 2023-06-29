import { createSlice } from "@reduxjs/toolkit";
import {ampm} from "./component/Header"
const listSlice = createSlice({
    name: "list",
    initialState: [
        /* {
            id: "1",
            title: "Trác Đình Trung quá là đẹp trai",
            completed: false,
            hour: 11,
            minute: 12,
            day: 11,
            month: 12,
            year: 1997,
            ampm: "AM",
            status: "Incomplete",
        }, */
    ],
    reducers: {
        deletes(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        addList(state, action) {
            return [...state, action.payload];
        },
        updates(state, action) {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    console.log(item.id);
                    return {
                        ...item,
                        ...action.payload,
                    };
                }
                return item;
            });
        },
    },
});
const {actions,reducer}=listSlice
export const {deletes, addList,updates}=actions;
export default reducer;