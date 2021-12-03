import { CHANGE_TABLE, CHANGE_VALUE, LOAD_TABLE } from "./actionType"

export const changetable = (payload) => {
    return {
        type : CHANGE_TABLE,
        payload : payload
    }
}

export const loadtable = (payload) => {
    return {
        type : LOAD_TABLE,
        payload : payload
    }
}

export const changevalue = (payload) => {
    return {
        type : CHANGE_VALUE,
        payload : payload,
    }
}

