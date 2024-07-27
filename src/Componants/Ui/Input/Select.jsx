import React from "react";
import { InputWrapper, SelectField } from "./Style";
import { isEmpty } from "../../../utils/common";
import selectDeopdownIcon from "../../../assets/selectDeopdown.png";

function Select({
  name = "",
  placeholder = "",
  label = "",
  error = "",
  value = "",
  onChange = (e) => {},
  className = "",
  options = [],
  notes="",
  listError=false,
  ...props
}) {
  return (
    <>
      <InputWrapper className={`${className}`}>
        {!isEmpty(label) && <label htmlFor="">{label}</label>}
      
        <SelectField name={name}  value={value} onChange={onChange}  img={selectDeopdownIcon} {...props} >
          {!isEmpty(placeholder) && <option value="">{placeholder}</option>}
          {options &&
            options.map((item, index) => {
              return (
                <option key={index} value={item?.value}>
                  {item?.label}
                </option>
              );
            })}
        </SelectField>
        {!isEmpty(notes) && <>
        {listError && <> <span className="error" style={{minHeight:"15px"}}>{" "}</span><br/></>}
        <span className="notes" htmlFor="">*{notes}</span>
        </>
        }
        {!isEmpty(error) && <span className="error">{error}</span>}
      </InputWrapper>
    </>
  );
}

export default Select;
