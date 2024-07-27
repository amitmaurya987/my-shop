import styled from "styled-components";

export const TabWrapper = styled.div`
  width: 100%;
  min-height: 60px;
  padding: 16px 20px;
  background: #f9f9f9;
  .angle{
    width: 24px;
    height: 24px;
  }
`;
export const TabItemWrapper = styled.div`
  .numberBox {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #616161;
    font-family: Helvetica Neue;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #616161;
    user-select: none;
    &.active {
      background-color: #061c28;
      color: #fff;
    }
    &.done {
      color: transparent;
      background-color: #061c28;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 6.67px;
        top: 6.67px;
        left: 6.33px;
        border: 1.25px solid #ffffff;
        border-color: transparent transparent #ffffff #ffffff;
        transform: rotate(-47deg);
      }
    }
    .text{
        color: #242020;

    }
  }
`;
