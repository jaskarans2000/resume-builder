import { createStore } from "redux";
import eReducer from "./redux/eReducer";

const estore = createStore(eReducer);
export default estore;