import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Api from '../../api/api'

export const getSabores = createAsyncThunk(
  'orders/getSabores',
  async () => {
    const response = await Api.getSabores();
    return response;
  }
)

export const getMassas = createAsyncThunk(
  'orders/getMassas',
  async () => {
    const response = await Api.getMassas();
    return response;
  }
)

export const getTamanhos = createAsyncThunk(
  'orders/getTamanhos',
  async () => {
    const response = await Api.getTamanhos();
    return response;
  }
)

export const getPizzaDoDia = createAsyncThunk(
  'orders/getPizzaDoDia',
  async () => {
    const response = await Api.getTamanhos();
    return response;
  }
)

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    sabores: null,
    massas: null,
    tamanhos_pizzas: null,
    pizza_dia: null
  },
  reducers: {
  },
  extraReducers: {
    [getSabores.fulfilled]: (state, action) => {
      state.sabores = action.payload;
    },
    [getMassas.fulfilled]: (state, action) => {
      state.massas = action.payload;
    },
    [getTamanhos.fulfilled]: (state, action) => {
      state.tamanhos_pizzas = action.payload;
    },
    [getPizzaDoDia.fulfilled]: (state, action) => {
      state.pizza_dia = action.payload;
    },
  }
})
export const getHotFlavor = state => state.sabores.filter(el => el.hot === true);

export const { increment, decrement, incrementByAmount, initApp } = itemsSlice.actions

export default itemsSlice.reducer