import styled from "styled-components";
import Model from "./Model";

export const OverLayer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: self-start;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #ffffff80;
  overflow-y: auto;
`;
export const ModelWrapper = styled.div`
  margin: 50px 40px;
  flex: 1 1 800px;
  max-width: 800px;
  min-height: 682px;
  background-color: #fff;
  box-shadow: 0px 8px 8px -4px #1018280a, 0px 20px 24px -4px #1018281a;
  border: 1px solid #00000033;
  border-radius: 8px;
  position: relative;
  transition: all .3s;
  &.onboarding{
    margin: 0 20px 50px;
    min-height: 400px;
    max-width: 900px;
    height: auto;
    .tabContact{
      margin-bottom: 70px;
      section{
        margin-bottom: 10px;
      }
      .label{
        font-size: 16px;
        
         clip-path: polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%);
     

    background-color: #0E2B7B;
    color: #fff;
    display: inline-block;
    padding: 6px 30px 6px 8px;
   

      }
    }
  }
  &.opacity-0{
    opacity: 0;
    visibility: hidden;
  }
  &.opacity-1{
    opacity: 1;
    visibility: visible;
  }
  &.zoom-1{
     transform: scale(.01);
  }
  &.zoom{
     transform: scale(1.0);
  }
`;

export const AddCustomersWrapper = styled.div`
  .modelHeader {
    min-height: 61px;
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    h2 {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
    }
    .close {
      width: 24px;
      height: 24px;
      transition: all .3s;
      &:hover{
        transform: rotate(180deg);
      }
    }
  }
  .tabContact {
    padding: 16px 20px;
  }
  .deleteItem {
    width: 34px;
    height: 34px;
    flex: 0 0 40px !important;
    background: #f5f5f5;
    align-self: auto;
    margin-left: 16px;
    border-radius: 8px;
  }
  .addMore {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    max-width: 160px;
    transition: all .3s;
    &:hover{
      color: #0E2B7B;
    }
  }
  .cardFooterSecont{
    position: absolute;
    width: 100%;
height: 116px;
padding: 16px;
background: #F5F5F5;
bottom: 69px;
left: 0;
p{

font-size: 16px;
font-weight: 400;
line-height: 20px;
padding: 8px 0;
max-width: 356px;
margin-left: auto;

  &.border-botom{
    border-bottom: 1px solid #d6d9e1
  }
  span{
    width: 50%;
  }
  span.prize{

font-weight: 700;
color: #212121;

  }
}
  }
  .addProductBox{
    height: 344px;
    overflow-y: auto;
  }
`;

export const ModelFooter = styled.div`
  position: absolute;
  min-height: 69px;
  padding: 12px 16px;
  border-top: 1px solid #dee2e6;
  bottom: 0;
  left: 0;
  width: 100%;
`;
