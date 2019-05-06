export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET = 'SET'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const set = (target) => ({
  type: SET,
  payload: target
})