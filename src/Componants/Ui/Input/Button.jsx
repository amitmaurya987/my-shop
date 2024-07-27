import React from 'react'
import { ButtonWrapper } from './Style'
import { isEmpty } from '../../../utils/common';

function Button({title,onClick=() =>{},className = "",Icon,iconPosition="right"}) {
  return (
    <ButtonWrapper onClick={onClick} className={className + " center gap-4"}>
      {isEmpty(Icon)?title
      :iconPosition === "left"
      ?<><Icon /><span>{title}</span></>
      :<><span>{title}</span><Icon /></>}
    </ButtonWrapper>
  )
}

export default Button;
