import React from 'react';
import { useSelector}  from 'react-redux'
import { increment, decrement, set } from './state/counter/actions';

import logo from './logo.svg';
import './App.css';
import { useBoundActions, useActions } from './hooks/dispatch';

function App() {
  const counter = useSelector(state => state.counter)

  // const { onIncrement, onDecrement } = useActions((dispatch) => ({
  //   onIncrement: () => dispatch(increment()),
  //   onDecrement: () => dispatch(decrement()),
  // }))

  const { onIncrement, onDecrement, onSet } = useBoundActions({
    onIncrement: increment,
    onDecrement: decrement,
    onSet: set,
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter: {counter}
        </p>
        <p>
          <button type="button" onClick={onIncrement}>+</button>
          <button type="button" onClick={onDecrement}>-</button>
          <button type="button" onClick={() => onSet(5)}>Set to 5</button>
        </p>
      </header>
    </div>
  );
}

export default App;
