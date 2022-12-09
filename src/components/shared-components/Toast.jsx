import React from "react"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Toast({ type, message }) {
  //type to show error or success for green or red
  const notify = () => {
    if (type === "error") {
      //error toats
      toast(message)
    } else {
      //success toast
      toast(message)
    }
  }

  return <div>{notify} </div>
}

export default Toast
