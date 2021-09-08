import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter1 = useSelector(state => state.counter1);
    const counter2 = useSelector(state => state.counter2);

    const increment1 = () => {
        dispatch({type: 'INCREMENT_1'})
    }

    const increment2 = () => {
        dispatch({type: 'INCREMENT_2'});
    }

    return (
        <div>
            <h1>Counter 1 - {counter1}</h1>
            <h1>Counter 2 - {counter2}</h1>
            <button onClick={increment1}>Increment 1</button>
            <button onClick={increment2}>Increment 2</button>
        </div>
    )
}

export default Counter;