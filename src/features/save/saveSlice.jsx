import { createSlice } from "@reduxjs/toolkit"


let initialState = {list: JSON.parse(localStorage.getItem('saves')) || []}


let saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers: {
        addSave: (state, action) => {
            while(state.list.some((item) => item.id == action.payload.id)){
                if(state.list.some((item) => item.id == action.payload.id)){
                    action.payload.id = Math.random()
                }
            }
            console.log(state.list.length)
            if(state.list.length == 8){
                state.list.unshift(action.payload)
                state.list.pop()
            }else(state.list.unshift(action.payload))
            localStorage.setItem('saves', JSON.stringify(state.list))
        },
        removedSave: (state, action) => {
            state.list = state.list.filter((item) => {return item.id !== action.payload.id})
            localStorage.setItem('saves', JSON.stringify(state.list))
        }
    }
})


export default saveSlice.reducer
export const {addSave, removedSave} = saveSlice.actions