import Chart_reducer from "./Chart_reducer";
import { combineReducers } from "redux";

const Reducer = combineReducers({
  Chart : Chart_reducer,
})

export default Reducer;