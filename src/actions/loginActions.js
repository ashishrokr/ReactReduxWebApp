import * as restApi from "../components/common/restApi";
import config from "../config";

export const AUTHENTICATED = "authenticated_user";
export const AUTHENTICATION_ERROR = "authentication_error";
export const UNAUTHENTICATED = "unauthenticated_user";

export function onLogin(values, history) {
	return async dispatch => {
		let url = `${config.backend.url}auth/login`;
		try {
			const res = await restApi.POST(url, values);
			dispatch({ type: AUTHENTICATED });
			localStorage.setItem("user", res.token);
			history.push("/home");
		} catch (error) {
			dispatch({
				type: AUTHENTICATION_ERROR,
				payload: "Invalid email or password"
			});
		}
	};
}

export function signoutUser(history) {
	localStorage.removeItem("user");
	history.push("/");
	return { type: UNAUTHENTICATED };
}
