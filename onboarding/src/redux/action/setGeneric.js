import { ActionType } from "../constant/actionType"

export const setGeneric = (object={}) => {
    return {
        type: ActionType?.SET_GENERIC,
        payload: object
    }
}