import * as typeActions from '../constants/usersConsts'

const allInitialState = {
    items: [],
    loading: false,
    error: null,
}
export const allUsersReducer = (state=allInitialState, action)=>{
    switch(action.type){
        case typeActions.USERS_ALL_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case typeActions.USERS_ALL_SUCCESS:
            return{
                ...state,
                loading: false,
                items: [...state.items, ...action.payload],
                error: null,
            }
        case typeActions.USERS_ALL_FAIL:
            return{
                ...state,
                loading: false,
                items: [],
                error: action.payload,
            }
        default:
            return state
    }
}
const femaleInitialState = {
    items: [],
    loading: false,
    error: null,
}
export const femaleUsersReducer = (state=femaleInitialState, action)=>{
    switch(action.type){
        case typeActions.USERS_FEMALE_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case typeActions.USERS_FEMALE_SUCCESS:
            return{
                ...state,
                loading: false,
                items: [...state.items, ...action.payload],
                error: null,
            }
        case typeActions.USERS_FEMALE_FAIL:
            return{
                ...state,
                loading: false,
                items: [],
                error: action.payload,
            }
        default:
            return state
    }
}
const maleInitialState = {
    items: [],
    loading: false,
    error: null,
}
export const maleUsersReducer = (state=maleInitialState, action)=>{
    switch(action.type){
        case typeActions.USERS_MALE_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case typeActions.USERS_MALE_SUCCESS:
            return{
                ...state,
                loading: false,
                items: [...state.items, ...action.payload],
                error: null,
            }
        case typeActions.USERS_MALE_FAIL:
            return{
                ...state,
                loading: false,
                items: [],
                error: action.payload,
            }
        default:
            return state
    }
}