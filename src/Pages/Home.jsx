// import React, { useState } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import Edite from "./Edite";
import React, { useState, useEffect } from "react";


const chars = "01ABCDEF";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

// useEffect(() => {
//   if (EditFilterUSer) {
  //     setUpdatedName(EditFilterUSer.name);
//     setUpdatedEmail(EditFilterUSer.email);
//     setUpdatedPassword(EditFilterUSer.phone);
//   }
// }, []);

function column() {
  return Array.from({ length: 30 }, () => randomChar());
}

export default function Home() {
  const [glitchId, setGlitchId] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState([])
  
  function triggerGlitch(id) {
    setGlitchId(id);
  }
  
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("student")) || [];
    setUser(data)
  },[])


  function addStudent() {
    navigate("/Addstudent");
  }

  function editStudent(id) {
    navigate(`/edit/${id}`);
  }

  const deleteFunc = (id) =>{
    let delres = confirm('Are you sure, you want to delete this record');
    if(delres){
      alert('Your Record is deleted');
      const deleteStudent = user.filter(s=> s.id !== id)
      localStorage.setItem('student',JSON.stringify(deleteStudent))
      setUser(deleteStudent)
      // window.location.reload()  
    }
  }

  useEffect(() => {
  const handleFocus = () => {
    const data = JSON.parse(localStorage.getItem("student")) || [];
    setUser(data);
  };

  window.addEventListener("focus", handleFocus);

  return () => window.removeEventListener("focus", handleFocus);
}, []);

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">

      {/* Matrix Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 90 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-[-50%] animate-drop text-green-500 text-[12px] font-mono opacity-20"
            style={{
              left: `${i * 1.2}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {column().map((c, idx) => (
              <div key={idx}>{c}</div>
            ))}
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 py-10">

        <h1
          className="
            text-center
            text-5xl
            font-bold
            mb-10
            tracking-[8px]
            text-green-400
            [text-shadow:0_0_10px_#00ff00,0_0_20px_#00ff00]
          "
        >
          STUDENT MANAGEMENT SYSTEM
        </h1>

         <div
          className="
            w-[95%]
            mx-auto
            bg-black/80
            border
            border-green-500
            rounded-xl
            p-6
            shadow-[0_0_25px_#00ff00]
          "
        >

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-2xl font-bold">
              TOTAL USERS :
              <span className="ml-2 text-green-300">
                {user.length}
              </span>
            </h3>

            <Button onclick={addStudent} />

          </div>

          <table className="w-full border border-green-500 text-center">

            <thead>
              <tr className="bg-green-500 text-black">
                <th className="p-4 border border-green-600">ID</th>
                <th className="p-4 border border-green-600">NAME</th>
                <th className="p-4 border border-green-600">EMAIL</th>
                <th className="p-4 border border-green-600">PHONE</th>
                <th className="p-4 border border-green-600">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {user.map((u) => (
                <tr
                  key={u.id}
                  className="hover:bg-green-500/10 duration-300"
                >
                  <td className="p-4 border border-green-500">{u.id}</td>
                  <td className="p-4 border border-green-500">{u.name}</td>
                  <td className="p-4 border border-green-500">{u.email}</td>
                  <td className="p-4 border border-green-500">{u.phone}</td>

                  <td className="p-4 border border-green-500">
                    <div className="flex gap-3 justify-center">

                      <button
                        onClick={() => {
                          triggerGlitch(u.id);
                          editStudent(u.id);
                        }}
                        className={`
                          active:scale-95
                          px-4 py-2
                          border border-yellow-400
                          text-yellow-400
                          hover:bg-yellow-400
                          hover:text-black
                          shadow-[0_0_10px_yellow]
                          duration-300
                          ${
                            glitchId === u.id
                              ? "glitch-effect"
                              : ""
                          }
                        `}
                      >
                        EDIT
                      </button>
                      <button
                      onClick={()=>deleteFunc(u.id)}
                        className={`
                          active:scale-95
                          px-4 py-2
                          border border-red-500
                          text-red-500
                          hover:bg-red-500
                          hover:text-black
                          shadow-[0_0_10px_red]
                          duration-300
                          ${
                            glitchId === u.id
                              ? "glitch-effect"
                              : ""
                          }
                        `}
                      >
                        DELETE
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

      <style>{`
        @keyframes drop {
          0% {
            transform: translateY(-120%);
          }
          100% {
            transform: translateY(120vh);
          }
        }

        .animate-drop {
          animation: drop linear infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -2px);
          }
          75% {
            transform: translate(-1px, 1px);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch-effect {
          animation: glitch 0.25s linear;
        }
      `}</style>

    </div>
  );
}