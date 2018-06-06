import {ADD_ORDER} from '../actions/types';

export function addOrder(order){
    return {
        type: ADD_ORDER,
        payload: order
    }
}