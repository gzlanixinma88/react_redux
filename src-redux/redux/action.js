import {INCREMENT, DECREMENT} from '../redux/action-types'

export const increment = number => ({type:INCREMENT.number})
export const decrement = number => ({type:DECREMENT.number})