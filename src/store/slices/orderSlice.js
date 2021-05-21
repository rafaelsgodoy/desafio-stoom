import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialSatateOrderInProgress = {
  sabor: null,
  tamanho: null,
  massa: null
}
export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    points: 0,
    orderInProgress: initialSatateOrderInProgress,
    order: []
  },
  reducers: {
    incrementPoints: (state, action) => {
      state.points += action.payload
    },
    setOrderInProgress: (state, action) => {
      state.orderInProgress = action.payload;
    },
    finishOrderInProgress: (state, action) => {
      state.order = [...state.order, { id: uuidv4(), order: state.orderInProgress }];
      state.orderInProgress = initialSatateOrderInProgress;
    },
    removeOrderBydId: (state, action) => {
      state.order = state.order.filter(el => el.id !== action.payload)
    },
    finishCart: (state, action) => {
      let totalPoints = 0;
      state.order.forEach((el) => {
        if (el.order.sabor.hot)
          totalPoints += parseInt(el.order.sabor.points)
      });
      console.log("totalPoints", totalPoints)
      state.points += totalPoints;
      state.order = [];
    }
  },
})
export const { incrementPoints, setOrderInProgress, finishOrderInProgress, removeOrderBydId, finishCart } = orderSlice.actions

export default orderSlice.reducer