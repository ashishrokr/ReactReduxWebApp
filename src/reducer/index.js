import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import courses from "./courseReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({
	form: reduxFormReducer,
	login,
	courses
});

export default rootReducer;
