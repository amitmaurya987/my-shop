import React from 'react'
import { LoginButtonWrapper } from './Style'

function LoginButton({icon,title,className="", onClick=() =>{}}) {
  return (
    <LoginButtonWrapper className={`center ${className}`} onClick={() =>onClick()}>
           <img src={icon} alt="title" /> <span>{title}</span>
    </LoginButtonWrapper>
  )
}

export default LoginButton
