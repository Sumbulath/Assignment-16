import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
    selectedProduct:null,
  },
  reducers: {
    addTocart: (state,action) => {
      
      state.value =[...state.value,action.payload]
    },
    removecart:(state,action)=>{
        state.value=state.value.filter((product)=>product.id!=action.payload)
    },
    proview:(state,action)=>{
      state.selectedProduct=action.payload
    }  }
})


export const { addTocart,removecart,proview} = cartSlice.actions

export default cartSlice.reducer