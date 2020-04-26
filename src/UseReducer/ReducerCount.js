import React, { useReducer } from 'react';
const initialState ={count:0}
const reducer =(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1};
        case 'DECREMENT':
            return {count:state.count-1};
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <h1>ReducerCount value:{state.count}</h1>
            <button className="btn btn-secondary" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button className="btn btn-secondary" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>

        </div>
    );
};

export default ReducerCount;