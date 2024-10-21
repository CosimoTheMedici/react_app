import React from 'react';
import {toast} from "react-toastify";
import './notifications.css'
import warningIcon from './icons/warning.png';
import errorIcon from './icons/error.png';
import successIcon from './icons/success.png';
import infoIcon from './icons/info.png';

const typeToImage = {
  warning: warningIcon,
  error: errorIcon,
  success: successIcon,
  info: infoIcon,
};


const CustomToastContent = ({ message, type }) => (
  <div style={{ display: 'flex', alignItems: 'center'}}>
    <img src={typeToImage[type]} alt="icon" style={{ width: 30, height: 30}} />
    <div style={{ fontWeight: 'bold', marginLeft: 10, fontSize: 13 }}>{message}</div>
  </div>
);

export const successNotification = (message) => {
  return toast.success(<CustomToastContent message={message} type='success' />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "success-toast"
  });
};

export const warningNotification = (message) => {
  return toast.warn(<CustomToastContent message={message} type='warning' />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "warning-toast"
  });
};


export const errorNotification = (message) => {
  return toast.error(<CustomToastContent message={message} type='error' />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "error-toast"
  });
};



export const infoNotification = (message) => {
  return toast.info(<CustomToastContent message={message} type='info' />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "info-toast"
  });
};