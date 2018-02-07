import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
        return state +5;
    case 'DECREMENT':
        return state -5;
    case 'RESET':
        return state =0;
    default:
        return state;    
  }
}

const store = createStore(reducer);

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onReset}>Reset</button>
    <button onClick={onDecrement}>-</button>
    
  </div>
)

const r = () => {
  render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        onReset={() => store.dispatch({type: 'RESET'})}
     />, 
     document.getElementById('root')
  )
}

r();
store.subscribe(r)