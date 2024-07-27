import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { NotifactionBooxWrapper, NotifactionWrapper } from "./style";

const Notification = ({ type, text }) => {

  const [opacity, setOpacity] = useState("opacity-0");
  const [margin, setMargin] = useState("");
  const [height, setHeight] = useState("");
  const alerts = {
    info: {
      icon: (
        <svg
          className="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "notification-info",
    },
    error: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "notification-error",
    },
    warning: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      color: "notification-warning",
    },
    success: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "notification-success",
    },
  };

  useEffect(() =>{
    const timerId = setTimeout(() =>{
      setOpacity("opacity-1")
    },1);
    
    return(() => clearTimeout(timerId))
  },[]);

  useEffect(() =>{
    const timerId = setTimeout(() =>{
      setOpacity("opacity-0");
      setMargin("remove")
    },5000);
    
    return(() => clearTimeout(timerId))
  },[]);
  useEffect(() =>{
    const timerId = setTimeout(() =>{
      setHeight("height-0")
    },5100);
    
    return(() => clearTimeout(timerId))
  },[]);





  return (
    <NotifactionWrapper className={`${alerts[type].color} ${opacity} ${margin} ${height}`} >
      {alerts[type].icon}
      <p>{text}</p>
    </NotifactionWrapper>
  );
};

const NotificationBox = forwardRef((props, ref) => {
  const [notifications, setNotifications] = useState([]);

  const sendNotification = (type, text) => {
    const newNotification = { type, text, id: Date.now() }; // Add unique identifier
    setNotifications([...notifications, newNotification]);
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((n) => n.id !== newNotification.id)
      );
    }, 5700);
  };

  useImperativeHandle(ref, () => ({
    sendNotification,
  }));

  return (
    <NotifactionBooxWrapper>
      {notifications.map((notification, index) => (
        <Notification
          key={notification.id} // Use unique identifier as key
          type={notification.type}
          text={notification.text}
        />
      ))}
    </NotifactionBooxWrapper>
  );
});

export default NotificationBox;