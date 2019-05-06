import { INCREMENT, DECREMENT, SET } from "./actions";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: 
      return state + 1
    
     case DECREMENT: 
       return state - 1

     case SET:
      return action.payload
     
     default: 
       return state
  }
}