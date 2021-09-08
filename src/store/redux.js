import { createStore } from 'redux';

const stateAwal = {
    counter: [{id: 2 ,angka: 1}, {id: 1, angka: 2}]
}

const reducer = (state = stateAwal, action) => {
    if (action.type === 'INCREMENT_1') {
        let index = state.counter.findIndex(el => el.id === action.payload.id);
        let counterCopy = [...state.counter];
        counterCopy[index] = {...counterCopy[index], angka: counterCopy[index].angka + action.payload.angkaYangDitambahkan}

        return {
            counter: counterCopy
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