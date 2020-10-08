import { GET_PM, GET_GROUP_PM, GET_GROUP_PM_COHORTE } from '../consts/actionTypes.js';

const initialState = []

export default function getPm(state = initialState, action) {
    switch (action.type) {
        case GET_PM:
            return {
                ...state,
                data: action.payload
            }
        case GET_GROUP_PM:
            return {
                ...state,
                data: action.payload
            }
        case GET_GROUP_PM_COHORTE:
            return {
                ...state,
                data: action.payload
            }

        default:
            return { ...state };
    }

}