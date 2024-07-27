




export const setStorage = (key,value) =>{
        sessionStorage.setItem(key,value);
}

export const getStorage = key => sessionStorage.getItem(key);
export const clearStorage = key => sessionStorage.clear();


export function capitalizeFirstLetter(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}



export function isEmpty(obj) {
  let isEmpty = false;
  const type = typeof obj;

  isEmpty = isEmpty || !obj;
  isEmpty = isEmpty || type === "undefined"; // if it is undefined
  isEmpty = isEmpty || obj === null; // if it is null
  isEmpty = isEmpty || (type === "string" && obj === ""); // if the string is empty
  isEmpty = isEmpty || obj === false || obj === 0; // if boolean value returns false
  isEmpty = isEmpty || (Array.isArray(obj) && obj.length === 0); // if array is empty
  isEmpty = isEmpty || (type === "object" && Object.keys(obj).length === 0); // if object is empty

  return isEmpty;
}

export function isEmail(value) {
  return value.match(
    /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/
  );
}


// check if the value is positive number
export function isNumeric(value) {
  return value.match(/^\d+$/);
}
const dotRegex = /[^0-9\.]/


export function isAmount(value) {
  return dotRegex.test(value);
}

// check if the value is integer or float
export function isNumber(value, integerOnly = true) {
  if (integerOnly) {
    return value.match(/^\s*[+-]?\d+\s*$/);
  }

  return value.match(/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/);
}


// check if the strinc contains alphabets (spaces) only
export function isAlphabet(value, allowSpaces = true) {
  if (allowSpaces) {
    return value.match(/^[a-zA-Z\s]+$/);
  }

  return value.match(/^[a-zA-Z]+$/);
}

export function isName(value) {
  return value.match(/^[a-zA-Z0-9,./\-' ]*$/);
}



export function hideMessage(message, setMessage) {
  if (message) {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
}

const numberReg = /^[0-9]+$/;
export  function inputNumber(val){
  
  if (!numberReg.test(val) && val) {
    return false;
  }else{
    return true;
  }
}
export function toggleMenu(active){
  var sidebar = document.querySelector(".sideBar");

  if(active){
   sidebar.classList.add("active");
  }else{
   sidebar.classList.remove("active");
  }
}



export const setCookie = (name, value) => {
  const cookieName = name;
  const cookieValue = value;
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); 

  document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
};

export const deleteCookie = (name) => {
  const cookieName = name;
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

};

export const getCookieValue = (cookieName) => {
  const cookies = document.cookie.split(';');
       
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
 
    if (cookie.startsWith(cookieName + '=')) {
      const cookieValue = cookie.substring(cookieName.length + 1);
      return cookieValue;
    }
  }
}

// export const getTokenDaital = () =>{
//     const token = ("token")
//     if(token){
//       try {
//         return jwtDecode(token);
      
//       } catch (error) {
        
//        }
//     }
   
 
// }

export const sendNotification = (ref,type, text) => {

if (ref.current) {

ref.current.sendNotification(type, text);
}
};


export function creditCardType(cc) {
  const number = cc.toString()
  let amex = new RegExp('^3[47][0-9]{2}$');         
  let visa = new RegExp('^4[0-9]{3}$');              
  let cup1 = new RegExp('^62[0-9]{2}$');             
  let cup2 = new RegExp('^81[0-9]{2}$');             
  
  let mastercard = new RegExp('^5[1-5][0-9]{2}$');  
  let mastercard2 = new RegExp('^2[2-7][0-9]{2}$');  
  
  let disco1 = new RegExp('^6011$');                
  let disco2 = new RegExp('^62[24568][0-9]$');       
  let disco3 = new RegExp('^6[45][0-9]{2}$');        
  
  let diners = new RegExp('^3[0689][0-9]{2}$');      
  let jcb = new RegExp('^35[0-9]{2}$');   


  if (visa.test(number)) {
    return 'VISA';
  }
  if (amex.test(number)) {
    return 'AMEX';
  }
  if (mastercard.test(number) || mastercard2.test(number)) {
    return 'MASTERCARD';
  }
  if (disco1.test(number) || disco2.test(number) || disco3.test(number)) {
    return 'DISCOVER';
  }
  if (diners.test(number)) {
    return 'DINERS';
  }
  if (jcb.test(number)) {
    return 'JCB';
  }
  if (cup1.test(number) || cup2.test(number)) {
    return 'CHINA_UNION_PAY';
  }
  return undefined;
}


