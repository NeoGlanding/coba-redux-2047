import { createStore } from 'redux';

const stateAwal = {
    counter: [{id: 2 ,angka: 1}, {id: 1, angka: 2}]
}

const reducer = (state = stateAwal, action) => {
    if (action.type === 'INCREMENT_1') {
    }

    if (action.type === 'INCREMENT_2') {
        let copyCounter = [...state.counter];
        let index = state.counter.findIndex(el => el.id === action.payload.id);
        copyCounter[index] = {...copyCounter[index], angka: copyCounter[index].angka + action.payload.angka};

        return {
            counter: copyCounter
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;