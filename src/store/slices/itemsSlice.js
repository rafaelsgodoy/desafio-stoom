import { createSlice } from '@reduxjs/toolkit'

const pizza_dia = {
  sabor: {
    id: 1,
    name: 'Pizza Calabresa',
    price: "14,90",
    points: 30,
    image: 'assets/images/pizza1.jpg',
    ingredients: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  },
  tamanho: {
    id: 1,
    name: 'Grande',
    description: 'Lorem ipsum dolor sit amet'
  },
  massa: {
    id: 1,
    name: 'Massa Napolitana',
    description: 'Cillum dolore eu fugiat nulla pariatur'
  },
}

const sabores = [
  {
    id: 1,
    name: 'Pizza Calabresa',
    price: "14,90",
    points: 30,
    image: 'assets/images/pizza1.jpg',
    ingredients: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  },
  {
    id: 2,
    name: 'Pizza 4 Queijos',
    price: "16,90",
    points: 40,
    image: '/assets/images/pizza2.jpg',
    ingredients: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    hot: true
  },
  {
    id: 3,
    name: 'Pizza Vegetariana',
    price: "22,90",
    points: 50,
    image: '/assets/images/pizza3.jpg',
    ingredients: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  },
  {
    id: 4,
    name: 'Pizza Brocolis com Catupiry',
    price: "26,90",
    points: 70,
    image: '/assets/images/pizza4.jpg',
    ingredients: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  },
]
const massas = [
  {
    id: 1,
    name: 'Massa Napolitana',
    description: 'Cillum dolore eu fugiat nulla pariatur'
  },
  {
    id: 2,
    name: 'Massa Siciliana',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 3,
    name: 'Massa Prime',
    description: 'Duis aute irure dolor in reprehenderit'
  }
]
const tamanhos_pizzas = [
  {
    id: 1,
    name: 'Grande',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 2,
    name: 'Média',
    description: 'Duis aute irure dolor in reprehenderit'
  },
  {
    id: 3,
    name: 'Mini Pizza',
    description: 'Cillum dolore eu fugiat nulla pariatur'
  }
]

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    sabores,
    massas,
    tamanhos_pizzas,
    pizza_dia
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
export const getHotFlavor = state => state.sabores.filter(el => el.hot === true);

export const { increment, decrement, incrementByAmount } = itemsSlice.actions

export default itemsSlice.reducer