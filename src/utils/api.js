import Request from './Request';
import url from './url';

const apiRequest = new Request(
	() => {},
	() => {},
	() => {}
);

export const userAuthRequest = (params) => {
	return apiRequest.post(`${url.API_BASEPATH}${url.login.API_AUTHENTICATE}`, params);
};
export const getProfile = () => {
	return apiRequest.get(`${url.API_BASEPATH_V2}${url.api.GET_PROFILE}`);
};
export const getCustomers = () => {
	return apiRequest.get(`${url.API_BASEPATH_V2}${url.api.GET_CUSTOMERS}`);
};
export const getCatalog = () => {
	return apiRequest.post(`${url.API_BASEPATH}${url.api.GET_CATALOG}`,{});
};
export const createCustomer = (params) => {
	return apiRequest.post(`${url.API_BASEPATH}${url.api.CREATE_CUSTOMER}`,
	params
	);
};
export const productCatalog = (params={}) => {
	return apiRequest.post(`${url.API_BASEPATH}${url.api.PRODUCT_CATALOG}`,
	params
	);
};
export const productMarkupUpdate = (params=[]) => {
	return apiRequest.post(`${url.API_BASEPATH}${url.api.PRODUCT_MARKUP_UPDATE}`,
	params
	);
};
export const userOnbordingReview = (id,key) => {
	return apiRequest.get(`${url.API_BASEPATH}${url.api.USER_ONBOARDING_REVIEW}?id=${id}&key=${key}`,
	);
};
export const userOnbording = (payload) => {
	return apiRequest.post(`${url.API_BASEPATH}${url.api.USER_ONBOARDING}`,
		payload
	);
};
export const CheckDomainExist = (domain) => {
	return apiRequest.get(`${url.API_BASEPATH}${url.api.CHECK_DOMAIN_EXIST}/${domain}`,
	
	);
};
export const productDepentant = () => {
	return apiRequest.get(`${url.API_BASEPATH}${url.api.PRODUCT_DEPENDANTS}`,
	
	);
};



export const getProduct = ()=>{
	return apiRequest.get(`https://fakestoreapi.com/products`)
}
export const getSingaleProduct = (id)=>{
	return apiRequest.get(`https://fakestoreapi.com/products/${id}`)
}