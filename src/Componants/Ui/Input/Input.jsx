

import React from 'react'
import { InputField, InputWrapper } from './Style'
import { isEmpty } from '../../../utils/common';

function Input({type="text",name="",placeholder="",label="",error="", value="", ref="",onChange = (e)=>{},className="",...props}) {

  return (
    <>
    {
      type === "radio"?
      <InputWrapper className={`radio ${className}`}  >
   
      <div className="radioBox flex">
      <InputField 
      className='radioButton'
      type={type} 
      id={value}
         name={name}
         value={value}
        onChange={onChange}
        {...props}
        />
        {!isEmpty(label)&&<label style={{cursor:"pointer"}}htmlFor={value}>{label}</label>}
      </div>
        
        {!isEmpty(error)&&<span className='error'>{error}</span>}
   
        </InputWrapper>
        :
        <InputWrapper className={`${className}  ${ !isEmpty(label) && "lable"}`} >
        {!isEmpty(label)&&<label htmlFor="">{label}</label>}
          <InputField type={type} 
           name={name}
           value={value}
          placeholder={placeholder}
          {...props }
          onChange={onChange}
          
     
          />

          {!isEmpty(error)&&<span className='error'>{error}</span>}
     
          </InputWrapper>
    }
   
    
      
    </>
  )
}

export default Input;
