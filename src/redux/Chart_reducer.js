import { CHANGE_TABLE, CHANGE_VALUE, LOAD_TABLE } from "./actionType"

const initialState = []

function Chart_reducer (state=initialState,{ type,payload }){
    switch(type) {
        case CHANGE_TABLE:
            console.log("CHANGE TABLE")
            console.log(state)
            var tempState = state
            tempState[payload.tableIndex].elements = payload.value
            console.log(tempState)
            return tempState
            
        case LOAD_TABLE:
            console.log("LOAD TABLE")
            return payload;

        case CHANGE_VALUE:
            console.log("CHANGE VALUE")
            console.log(payload)
            var tempState = state
            tempState[payload.tableIndex].elements[payload.fieldIndex] = payload.value
            return tempState

        default :
            return state;
    }

}

export default Chart_reducer;