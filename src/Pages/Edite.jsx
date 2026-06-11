import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edite() {
  const { userId } = useParams();
  const navigate = useNavigate();
  
  const oldStudent =
    JSON.parse(localStorage.getItem("student")) || [];

  const EditFilterUSer = oldStudent.find(
    (es) => es.id === Number(userId)
  );
  const {name,email,phone} = EditFilterUSer
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPhone, setUpdatedPhone] = useState(phone);



  // useEffect(() => {
  //   if (EditFilterUSer) {
  //     setUpdatedName(EditFilterUSer.name);
  //     setUpdatedEmail(EditFilterUSer.email);
  //     setUpdatedPhone(EditFilterUSer.phone);
  //   }
  // }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    let users =
      JSON.parse(localStorage.getItem("student")) || [];

    const updatedUsers = users.map((u) =>
      u.id === Number(userId)
        ? {
            ...u,
            name: updatedName,
            email: updatedEmail,
            phone: updatedPhone,
          }
        : u
    );

    localStorage.setItem(
      "student",
      JSON.stringify(updatedUsers)
    );

    alert("Student Updated Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-black/80 border border-green-500 rounded-xl p-8 shadow-[0_0_25px_#00ff00]">
        <h1 className="text-center text-5xl font-bold mb-6 tracking-[6px] text-green-400">
          EDIT STUDENT
        </h1>

        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            value={updatedName}
            onChange={(e) =>
              setUpdatedName(e.target.value)
            }
            className="bg-black border border-green-500 px-4 py-3 rounded-lg outline-none"
          />

          <input
            type="email"
            value={updatedEmail}
            onChange={(e) =>
              setUpdatedEmail(e.target.value)
            }
            className="bg-black border border-green-500 px-4 py-3 rounded-lg outline-none"
          />

          <input
            type="text"
            value={updatedPhone}
            onChange={(e) =>
              setUpdatedPhone(e.target.value)
            }
            className="bg-black border border-green-500 px-4 py-3 rounded-lg outline-none"
          />

          <button
            type="submit"
            className="border border-green-500 py-3 rounded-lg"
          >
            UPDATE STUDENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edite;