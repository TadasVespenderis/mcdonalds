import {SWITCH_CATEGORY} from '../actions/types';

const active = (state='all', action)=>{
    if(action.type==='SWITCH_CATEGORY'){
        return action.payload
    }else {
        return state
    }
};

export default active;