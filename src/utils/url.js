

export default {
	
	API_BASEPATH: process.env.REACT_APP_API_URL,
	API_BASEPATH_V2: process.env.REACT_APP_API_URL_V2,
	API_BASEPATH_V3: process.env.REACT_APP_API_URL_V3,
    login:{
        API_AUTHENTICATE:"/v1/login"
    },
    api:{
        GET_PROFILE:"/ns-api/v2/domains/~/users/~",
        GET_CUSTOMERS:"/ns-api/v2/domains",
        GET_CATALOG:"/v1/products/catalog",
        CREATE_CUSTOMER:"/v1/customer/create",
        PRODUCT_CATALOG:"/v1/products/catalog",
        PRODUCT_MARKUP_UPDATE:"/v1/products/markup/update",
         USER_ONBOARDING_REVIEW:"/v1/customer/onboarding",
         USER_ONBOARDING:'/v1/customer/onboarding',
         CHECK_DOMAIN_EXIST:'/v1/domains/exist',
         PRODUCT_DEPENDANTS:"/v1/products/dependants",
         
    }
}
