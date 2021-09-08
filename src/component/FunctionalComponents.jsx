import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    // Angka YAng Ditambahin 10 ID 1
    const increment = () => {
        dispatch({type: 'INCREMENT_2', payload: {
            id: 1,
            angka: 10
        }})
    }

    return (
        <div>
            {counter.map(el => <h1>Counter - {el.angka}</h1>)}
            <button>Increment 1</button>
            <button onClick={increment}>Increment 2</button>
        </div>
    )
}

export default Counter;