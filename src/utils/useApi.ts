import axios from "axios";


export const useApi = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 5000,
    headers: {
		Accept: "application/json",
    },
	fetchOptions: {

	}
});
