import { capitalizeFirstLetter } from "./common";

export const formValidation = (values, excludeField, errorsObj) => {
    const errors = {};
    if (errorsObj && Object.keys(errorsObj).length != 0) {
      Object.keys(values).map((key) => {
        if (!excludeField.includes(key)) {
          errors[key] = errorsObj[key];
        }
      });
      return errors;
    } else {
      Object.keys(values).map((key) => {
        if (!excludeField || (excludeField && !excludeField.includes(key))) {
          const error = validateField(key, values[key]);
          if (error) {
            errors[key] = error;
          }
        }
      });
      return errors;
    }
  };


  function addSpacesToCamelCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  
  const validateField = (key, value) => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPass = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%]).{6,20}$/;
  
    switch (key) {
      case "email":
        if (!value) {
          return "Email is required!";
        } else if (!regexEmail.test(value)) {
          return "This is not a valid email format!";
        }
        break;
      case "password":
        if (!value) {
          return "Password is required!";
        } /*  else if (!regexPass.test(value)) {
          return "Requires one lower case letter, one upper case letter, one digit, one special charactor(#@$%), minimum 6 length and maximum 20 ";
        } */
        break;
      case "mobile":
        if (!value) {
          return "Mobile number is required!";
        } else if (value.length < 10 || value.length > 10) {
          return "Mobile Number must contain 10 digit";
        }
        break;
      case key:
        if (!value) {
          const key_ = capitalizeFirstLetter(key);
          return `${addSpacesToCamelCase(key_)} is required!`;
        }
        break;
  
      default:
        break;
    }
  };
  