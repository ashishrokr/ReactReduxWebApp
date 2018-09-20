import axios from "axios";
const user = localStorage.getItem("user");

export function GET(url) {
	let config = setApiConfig();
	return axios
		.get(url, config)
		.then(function(res) {
			if (res.status === 200 || res.status === 201) {
				return res.data;
			} else {
				throw res.data;
			}
		})
		.catch(error => {
			throw error;
		});
}

axios.interceptors.response.use(
	function(response) {
		console.log(JSON.stringify, response);
		return response;
	},
	function(error) {
		// Do something with response error
		return Promise.reject(error);
	}
);

export function POST(url, data) {
	let config = setApiConfig();
	return axios
		.post(url, data, config)
		.then(function(res) {
			if (res.status === 200 || res.status === 201 || res.status === 204) {
				return res.data;
			} else {
				throw res.data;
			}
		})
		.catch(error => {
			//console.log(error + "post error")
			throw error;
		});
}

export function PUT(url, data) {
	let config = setApiConfig();
	return axios
		.put(url, data, config)
		.then(function(res) {
			if (res.status === 200 || res.status === 201 || res.status === 204) {
				return res.data;
				//console.log("Put success")
			} else {
				throw res.data;
			}
		})
		.catch(error => {
			//console.log(error + "Put error")
			throw error;
		});
}

export function DELETE(url) {
	return axios({
		method: "DELETE",
		url: url,
		headers: { "Content-Type": "application/json" }
	})
		.then(res => {
			if (res.status === 200 || res.status === 201) {
				return res.data;
			} else {
				throw res.data;
			}
		})
		.catch(error => {
			throw error;
		});
}

function setApiConfig() {
	return {
		headers: {
			Authorization: `Bearer ${user}`
		}
	};
}
