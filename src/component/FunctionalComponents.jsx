import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const increment = () => {
        dispatch({type: 'INCREMENT_1', payload: {
            id: 1,
            angkaYangDitambahkan: 2
        }})
    }

    return (
        <div>
            {counter.map(el => <h1>Counter - {el.angka}</h1>)}
            <button onClick={increment}>Increment 1</button>
            <button>Increment 2</button>
        </div>
    )
}

export default Counter;