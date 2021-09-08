import { createStore } from 'redux';

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

const store = createStore(reducer);

export default store;