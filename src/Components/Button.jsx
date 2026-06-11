import { IoIosAdd } from "react-icons/io";
import React from 'react'

function Button({onclick}) {
  return (
    <>
    <button className="border px-5 py-2 rounded-xl cursor-pointer active:scale-95" onClick={onclick}>Add Student</button>
    </>
  )
}

export default Button