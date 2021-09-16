import * as typeActions from '../constants/userConstant'

export const getUser = (user)=>{
    return{
        type: typeActions.USER_SUCCESS,
        payload: user,
    }
}