import styled from "styled-components";

 
 export const NotifactionWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: white;
    font-size: 14px; 
    font-weight: 700;
    padding: 12px 16px ; 
    border-radius:  6px; 
    transform: translateY(-100%);
    transition: all 0.5s ease-in-out;
    margin-bottom:  4px; 
    min-width: 200px;
    gap: 4px;
    white-space: nowrap;
    &.remove{
      padding: 0;
      margin: 0;
    }
    &.height-0{
      height: 0;
    }
    svg{
      width: 24px;
    }
    &.opacity-0{
      opacity: 0;
    }
    &.opacity-1{
      opacity: 1;
    }
    p{
        color: #fff;
      margin: 0 0;
    }
    &.notification-success {
        background-color: #34D399; /* Green */
      }
      
      &.notification-error {
        background-color: #EF4444; /* Red */
      }
      
      &.notification-warning {
        background-color: #FBBF24; /* Yellow */
      }
      
      &.notification-info {
        background-color: #3B82F6; /* Blue */
      }
    `;
  

  
  export const NotifactionBooxWrapper = styled.div`
    display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  top: 60px;

  `;