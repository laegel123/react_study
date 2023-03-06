import React from "react";
import "./style.css";
import {createStore} from "redux";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./store";
import counterSlice from "./counterSlice";
import {up} from "./counterSlice";

/*function reducer(state, action) {
    if (action.type === 'up') {
        return {...state, value: state.value + action.step}
    }
    return state;
}
const initialState = {value: 0}
const store = createStore(reducer, initialState);*/

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    return <div>
        <button onClick={()=>{
            /*dispatch({type: 'counterSlice.js/up', step: 2});*/
            /*dispatch(counterSlice.actions.up(2));*/
            dispatch(up(2));
        }}>+</button> {count}
    </div>
}

export default function ReduxToolkit() {
    return (
        <Provider store={store}>
            <div>
                <Counter></Counter>
            </div>
        </Provider>
    )
};
