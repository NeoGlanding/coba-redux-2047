import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'

const stateAwal = {
    data: []    
}

const reducer = (state = stateAwal, action) => {
    if (action.type === 'GET_API') {
        return {
            data: [...state.data, ...action.payload]
        }
    }

    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;