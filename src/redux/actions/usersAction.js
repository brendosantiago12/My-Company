import * as typeActions from '../constants/usersConsts'
import axios from 'axios'

export const getAllUsers = (page) => async (dispatch)=>{
    try{
        dispatch({type: typeActions.USERS_ALL_REQUEST})
        const response =  await axios.get(`https://randomuser.me/api/?page=${page}&results=50`)
        dispatch({
            type:typeActions.USERS_ALL_SUCCESS,
            payload: response.data.results,
        })
    }catch(error){
        dispatch({
            type:typeActions.USERS_ALL_FAIL ,
            payload: error
        })
    }
}

export const getFemaleUsers = (page, gender) => async (dispatch)=>{
    try{
        dispatch({type: typeActions.USERS_FEMALE_REQUEST})
        const response =  await axios.get(`https://randomuser.me/api/?page=${page}&results=50&gender=${gender}`)
        dispatch({
            type:typeActions.USERS_FEMALE_SUCCESS,
            payload: response.data.results,
        })
    }catch(error){
        dispatch({
            type:typeActions.USERS_FEMALE_FAIL ,
            payload: error
        })
    }
}

export const getMaleUsers = (page, gender) => async (dispatch)=>{
    try{
        dispatch({type: typeActions.USERS_MALE_REQUEST})
        const response =  await axios.get(`https://randomuser.me/api/?page=${page}&results=50&gender=${gender}`)
        dispatch({
            type:typeActions.USERS_MALE_SUCCESS,
            payload: response.data.results,
        })
    }catch(error){
        dispatch({
            type:typeActions.USERS_MALE_FAIL ,
            payload: error
        })
    }
}