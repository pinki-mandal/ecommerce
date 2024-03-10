import { createStore } from "redux";
import rootReducers from "./components/redux/reducer/index";

const store = createStore(rootReducers);

export default store;