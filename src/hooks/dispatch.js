import { useMemo } from 'react';
import { useDispatch } from 'react-redux'

export const useActions = (mapper, deps) => {
  const dispatch = useDispatch()
  return useMemo(() => {
    return mapper(dispatch)
  }, deps)
}

export const useBoundActions = (actions, deps) => {
  const dispatch = useDispatch()

  return useMemo(() => {
    const output = {}
  
    Object.entries(actions)
      .map(entry => [entry[0], ((...args) => dispatch(entry[1](...args)))])
      .forEach(entry => output[entry[0]] = entry[1])
    
    return output
  }, deps)  
}
