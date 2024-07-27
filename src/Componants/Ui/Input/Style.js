import styled from "styled-components";

export const InputWrapper = styled.div`
  min-width: 80px;
  width: 100%;
  max-width: 880px;
  margin-bottom: 12px;
  position: relative;
  label {
    display: block;

    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 6px;
  }
  .error {
    font-size: 12px;
    color: red;
  }
  .notes{
    font-size: 11px;
    font-weight: 400;
    white-space: nowrap;
  }
  .img {
    position: absolute;
    height: 32px;
    width: 39px;
    top: 1px;
    left: 1px;
    border-radius: 8px 0 0 8px;
    &.left{
       left: auto;
       right: 1px;
       cursor: pointer;
    
    }
  }
  &.lable{
    .img{
      top: 25px;
    }
  }
  &.iconBg{
    .img{
     background-color: #F5F5F5;
    }
    input{
      padding-right: 48px!important;
    }
  }
  &.icon {
    input {
      padding-left: 36px;
    }
  }
  &.leftIcon {
    input{
      padding-left: 48px;
      
    }
    &.left   input{
      padding-left: 14px!important;
      padding-right: 36px!important;

    }
    
  }
  .radioBox{
    width: 100%;
  min-height: 34px;
  max-height: 34px;
  border-radius: 8px;
  border: 1px solid #d6d9e1;
  color: #616161;
  padding: 7px 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  align-items: center;
  gap: 6px;
  label{
    margin-bottom: 0;
  }
  }
`;
export const InputField = styled.input`
  width: 100%;
  min-height: 34px;
  max-height: 34px;
  border-radius: 8px;
  border: 1px solid #d6d9e1;
  color: #616161;
  padding: 7px 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: block;

 &.radioButton{
 width: 14px;
 height: 14px;
 accent-color: #061C28;
 cursor: pointer;
 }

  &:focus {
    outline-color: gold;
    
  }
`;
export const SelectField = styled.select`
  width: 100%;
  min-height: 30px;
  max-height: 34px;
  border-radius: 8px;
  border: 1px solid #d6d9e1;
  color: #616161;
  padding: 7px 14px;
  padding-right: 30px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: block;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: ${(props) => (props.img ? `url(${props.img})` : "")};
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;

  &:focus {
    outline-color: gold;
  }
`;


export const ButtonWrapper = styled.button`
  padding: 12px 16px 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  height: 44px;
  background: #061c28;
  color: #fff;
  border: none;
  gap: 4px;
  white-space: nowrap;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    background-color: #0E2B7B;
  }
  &.loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    &:after {
      content: "";
      display: block;
      width: 20px;
      padding: 4px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: #25b09b;
      --_m: conic-gradient(#0000 10%, #000),
        linear-gradient(#000 0 0) content-box;
      -webkit-mask: var(--_m);
      mask: var(--_m);
      -webkit-mask-composite: source-out;
      mask-composite: subtract;
      animation: l3 1s infinite linear;
    }
    @keyframes l3 {
      to {
        transform: rotate(1turn);
      }
    }
  }
  & > svg {
    &:first-child {
      //margin-inline: 4px;
    }
  }
  &.btnoutline {
    border: 1px solid #e0e0e0;
    background-color: transparent;
    color: #000000;
    &:hover{
      background: #061c28;
  color: #fff;
    }
  }
`;

export const LoginButtonWrapper = styled.button`
  width: 100%;
  height: 44px;
  padding: 10px 16px 10px 16px;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background-color: transparent;
  cursor: pointer;
`;

export const AlertWrapper = styled.div`
  padding: 10px 25px 10px 10px;
  position: relative;
  margin-bottom: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  width: clamp(300px, 100%, 800px);

  &.error {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }

  &.success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }
  &.globle {
    position: fixed;
    //width: 50%;
    max-width: 70%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 11111;
    font-size: 14px;
    animation: mymove 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

    .close {
      font-size: 18px;
      position: absolute;
      top: 50%;
      right: 6px;
      transform: translateY(-50%);
    }
  }
  &.error.globle {
    background-color: #fee;
    border: 1px solid #ffb8b8;
    color: #a66;
  }
  &.success.globle {
    background-color: #efe;
    border: 1px solid #ded;
    color: #9a9;
  }
  .close {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: 0.6;
    &:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      filter: alpha(opacity=50);
      opacity: 0.5;
    }
  }
  @keyframes mymove {
    from {
      top: 0px;
    }
    to {
      top: 50px;
    }
  }
  @media only screen and (max-width: 767px) {
    &.globle {
      width: calc(100% - 50px);
    }
  }
`;

export const PageHeaderWrapper = styled.div`
  .heading {
    h2 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      color: #101828;
    }
    .bagdes {
      background-color: #828ea4;
      padding: 4px 12px 4px 12px;
      gap: 8px;
      border-radius: 20px;
      opacity: 0px;
      color: #fff;
    }
  }
`;

export const TableWrapper = styled.div`
  .tableWrapper {
    table {
      width: 100%;
      border-spacing: 0;

      thead {
        tr {
          background: #f5f5f5;
          th {
            color: #000;
           
          }
        }
      }

      tr {
        td,
        th {
          padding: 12px 16px;
          text-align: start;
          border-bottom: 1px solid #f5f5f5;
          font-size: 14px;
          color: #424242;
          /* &:last-child{
				text-align: end;
			} */
       .btn{
            
       background-color: transparent;
       border: none;
       cursor: pointer;

            }
            .btn-solid{
              padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    background: #061c28;
    color: #fff;
    border: none;
    gap: 4px;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s;
}
            
        }
      }
    }
  }
  & > .paginationBox {
    padding: 10px 10px 10px 16px;
    & > div:first-child {
      font-size: 12px;
      color: #595959;
    }
    select {
      border-radius: 8px;
      border: 1px solid #d6d9e1;
      color: #616161;
      &:focus {
       outline-color: gold;
      }
    }
  }
`;

export const DashboardCardWrapper = styled.div`
  height: 100px;
  padding: 24px 20px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #dfe1ec;
  flex: 1 1 267px;
  max-width: 320px;

  h2 {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }
`;
