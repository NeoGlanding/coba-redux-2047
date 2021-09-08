import axios from 'axios'

export const getApi = () => {
    return async (dispatch) => {
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        //     let data = res.data;
        //     // let x = [...data]
        //     dispatch({type: 'GET_API', payload: data})
        // })
        try {
            let data = await axios.get('https://jsonplaceholder.typicode.com/users');
            data = data.data;
            dispatch({type: 'GET_API', payload: data})
        } catch(err) {
            console.log(err)
        }
    }
}