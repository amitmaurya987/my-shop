

import axios from 'axios';
import { getCookieValue } from './common';
class Request {
	constructor(dispatch, successFn, errorFn) {
		this.successFn = typeof successFn === 'function' ? successFn : () => {};
		this.errorFn = typeof errorFn === 'function' ? errorFn : () => {};
		this.dispatch = typeof dispatch === 'function' ? dispatch : () => {};
	}

	instance() {
		const headers = {
			Authorization: `Bearer ${getCookieValue("token")}`,
		};

		const instance = axios.create({
			baseURL: '',
			headers,
		});

		return instance;
	}

	/**
	 * GET Requests
	 * @param {string} url
	 * @param {object} params
	 */
	async get(url, params = {}) {
		try {
			const res = await this.instance().get(url, params);
			const data = res.data ? res.data : null;
			const headers = res.headers ? res.headers : null;
			this.successFn(data, headers);
		
			return res;
		} catch (error) {
		
			this.errorFn(error);
			return error.response;
		}
	}

	/**
	 * POST Requests
	 * @param {string} url
	 * @param {object} params
	 */
	async post(url, params = {}) {
		try {
			const res = await this.instance().post(url, params);
			const { data = {}, status } = res;
			this.successFn(data, status);
			return res;
		} catch (error) {
			this.errorFn(error);
			return error.response;
		}
	}
	async delete(url, params = {}) {
		try {
			const res = await this.instance().post(url, params);
			const { data = {}, status } = res;
			this.successFn(data, status);
			return res;
		} catch (error) {

			this.errorFn(error);
			return error.response;
		}
	}
}

export default Request;
