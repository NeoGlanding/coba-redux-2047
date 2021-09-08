import { createStore } from 'redux';

const stateAwal = {
    counter1: 1,
    counter2: 1
}

const reducer = (state = stateAwal, action) => {
    if (action.type === 'INCREMENT_1') {
        return {
            ...state,
            counter1: state.counter1 + 1,
        }
    }

    if (action.type === 'INCREMENT_2') {
        return {
            ...state,
            counter2: state.counter2 + 1
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;