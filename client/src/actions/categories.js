import axios from 'axios';
import {FETCH_CATEGORIES, SWITCH_CATEGORY} from '../actions/types';

export function fetchCategories(category){

    return async function (dispatch){
        const response = await axios.get('/api/categories')

            dispatch({
                type: 'FETCH_CATEGORIES',
                payload: response.data
            })
    }
}

export function switchCategory (value){
    // console.log(value)
    return{
        type: 'SWITCH_CATEGORY',
        payload: value
    }
}