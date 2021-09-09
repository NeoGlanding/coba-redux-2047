import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getApi} from './../store/action'

const ReduxThunk = props => {
    const state = useSelector(st => st.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApi());
    }, [])

    return (
        <div>
            {state.length === 0 ? 'Tunggu' : 'Udah ada'}
        </div>
    )
}

export default ReduxThunk