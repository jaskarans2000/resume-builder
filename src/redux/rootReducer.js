import { combineReducers } from "redux";
import BatReducer from "./Bat/batReducer";
import BallReducer from "./Ball/ballReducer";
import userReducer from "./User/userReducer";
// console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer,
    User: userReducer
});
export default rootReducer;