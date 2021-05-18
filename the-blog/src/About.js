import { useEffect, useReducer } from "react";

const aboutReducer = (state, action) => {
    switch(action.type){
        case 'increment':
            console.log('increment');
            return { count : state.count + action.payload};
        case 'decrement':
            console.log('decrement');
            return { count : state.count - action.payload};
        default:
            return { count: state.count };
    }
};
export const About = () => {
  
   const [state, dispatch] = useReducer(aboutReducer, {count: 0});

   useEffect(() => {
       dispatch({type: 'increment', payload : 1});
   }, []);

  return <div className="container about">
    <h1>This About</h1>
    <div className="hit-counter">
        <span>Hit Counter</span> <strong>{state.count}</strong>
    </div>
    <div>
        <button type="button" onClick={() => dispatch({type: 'increment', payload: 1})}>➕</button>
        <span>{state.count}</span>
        <button type="button" onClick={() => dispatch({type: 'decrement', payload: 1})}>➖</button>
    </div>
  </div>
}