import React, { useEffect } from "react";
import { AlertWrapper } from "./Style";
import { isEmpty } from "../../../utils/common";

function Alert({setMessage=() =>{},message,place="",timeout=0}) {
    useEffect(() =>{
       if (!isEmpty(message) && timeout > 0 ){
            setTimeout(() =>{
                setMessage({})
            },timeout)
        }
    },[message])
  return (
    <>
    {!isEmpty(message) && (
        <AlertWrapper className={`${message.type} ${place}`}>
            <span className="close" onClick={() => setMessage({})}>
                ×
            </span>
            {message.msg}
        </AlertWrapper>
    )}
    </>
  )
}

export default Alert;
