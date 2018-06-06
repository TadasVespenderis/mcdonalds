import axios from 'axios';
import {FETCH_MENU, REMOVE_ITEM} from '../actions/types';

export function fetchMenu (menuitem){

 return async function (dispatch) {
     const response = await axios.get('/api/menu');
     dispatch ({
         type: 'FETCH_MENU',
         payload: response.data
     })
    }
}

export function addItem(item){
    return{
        type: 'ADD_ITEM',
        payload: item
    }
}

export function removeItem(_id){
    return async function (dispatch){
        //siuncia i serveri
        const response = await axios.post('/api/admin/remove/item', {_id})
        //gauna atsaka is serverio
      dispatch({
          type: REMOVE_ITEM,
          payload: response.data
      })
    };
}