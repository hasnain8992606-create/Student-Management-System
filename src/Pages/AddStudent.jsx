import React, { useState } from "react";

function AddStudent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleform = (e) =>{
    e.preventDefault()



    const student = {
      id:Date.now(),
      name,
      email,
      phone
    }

    const oldStudent = JSON.parse(localStorage.getItem("student")) || [];

    const filterEmail = oldStudent.some((s)=>s.email.toLowerCase() === email.toLocaleLowerCase());

    if(filterEmail){
      alert('Email is Already register')
       setName('')
    setEmail('')
    setPhone('')
      return
    }    
    

    const newStudent = [...oldStudent,student]

    localStorage.setItem('student',JSON.stringify(newStudent))
    

    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <div className="min-h-screen bg-black text-green-400 flex justify-center items-center p-6">
      <div className=" w-full max-w-2xl bg-black/80 border border-green-500 rounded-xl p-8 shadow-[0_0_25px_#00ff00]" >
        <h1 className=" text-center text-5xl font-bold mb-8 tracking-[6px] text-green-400 [text-shadow:0_0_10px_#00ff00,0_0_20px_#00ff00]" >ADD STUDENT</h1>

        <h2 className="text-2xl font-bold mb-6 text-center">STUDENT FORM</h2>

        <form onSubmit={handleform} className="flex flex-col gap-6">

          <input type="text" placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className=" bg-black border border-green-500 px-4 py-3 rounded-lg outline-none text-green-400 placeholder-green-700 focus:shadow-[0_0_15px_#00ff00] "/>

          <input type="email" placeholder="Enter Your Email"
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          className=" bg-black border border-green-500 px-4 py-3 rounded-lg outline-none text-green-400 placeholder-green-700 focus:shadow-[0_0_15px_#00ff00] " />

          <input type="tel" placeholder="Enter Your Phone" 
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          className=" bg-black border border-green-500 px-4 py-3 rounded-lg outline-none text-green-400 placeholder-green-700 focus:shadow-[0_0_15px_#00ff00] " />

          <button type="submit" className=" mt-2 border border-green-500 py-3 rounded-lg text-green-400 font-bold cursor-pointer active:scale-95 shadow-[0_0_15px_#00ff00] ">SUBMIT FORM</button>

        </form>
      </div>
    </div>
  );
}

export default AddStudent;