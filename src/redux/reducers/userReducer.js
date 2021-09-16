import * as typeActions from '../constants/userConstant'

export const UserReducer = ( state = {}, action )=>{
    switch(action.type){
        case typeActions.USER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}