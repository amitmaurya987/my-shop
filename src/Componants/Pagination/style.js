import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const pagination = styled.div`
  border-radius: 5px;
  text-align: center;

  .next-btn,
  .prev-btn {
    &.disabled {
      cursor: not-allowed;
      color: #888;
    }
  }

  .pagination-nav {
    background-color: transparent;
    font-size: 12px;
    display: inline-block;
   min-width: 25px;
    letter-spacing: 0.3px;
    color: #595959;
    text-align: center;
    
    border: 0;
    padding: 0 4px;
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      font-weight: 700;
      font-size: 14px;
      color: #0d95df;
      box-shadow: 0 2px 4px 0 rgba(199, 199, 199, 0.5);
    }
    &.disabled {
      cursor: not-allowed;
      background: transparent;
    }
    &:hover {
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0 2px 4px 0 rgba(199, 199, 199, 0.5);
    }
  }

`;
