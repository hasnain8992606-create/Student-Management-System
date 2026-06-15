import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  const saveMessage = () => {
    if (!name || !email || !message) {
      setStatus("Please fill all fields!");
      return;
    }

    const newMessage = {
      name,
      email,
      message,
      time: new Date().toLocaleString(),
    };

    const updatedMessages = [...messages, newMessage];

    localStorage.setItem(
      "messages",
      JSON.stringify(updatedMessages)
    );

    setMessages(updatedMessages);
    setStatus("Message saved locally ✔");

    setName("");
    setEmail("");
    setMessage("");
  };

  const deleteMessage = (index) => {
    const updatedMessages = messages.filter(
      (_, i) => i !== index
    );

    localStorage.setItem(
      "messages",
      JSON.stringify(updatedMessages)
    );

    setMessages(updatedMessages);
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-gray-900 shadow-md">
        <h2 className="text-sky-400 text-2xl font-bold">
          MyPortfolio
        </h2>

        <div className="space-x-4 md:space-x-6">
          <a href="#home" className="hover:text-sky-400">
            Home
          </a>
          <a href="#about" className="hover:text-sky-400">
            About
          </a>
          <a href="#skills" className="hover:text-sky-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="text-center py-28 px-5"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-sky-400">
            Developer
          </span>
        </h1>

        <p className="text-slate-300 mt-4 mb-8">
          I build modern web applications using HTML,
          CSS & JavaScript
        </p>

        <a
          href="/cv.pdf"
          download
          className="bg-sky-400 text-black px-5 py-3 rounded-md font-bold hover:bg-sky-500 transition"
        >
          Download CV
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-16 px-5 text-center"
      >
        <h2 className="text-3xl font-bold text-sky-400 mb-5">
          About Me
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300">
          I am a passionate web developer learning
          modern technologies and building creative
          projects for the web.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-16 px-5 text-center"
      >
        <h2 className="text-3xl font-bold text-sky-400 mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-16 px-5 text-center"
      >
        <h2 className="text-3xl font-bold text-sky-400 mb-8">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            {
              title: "Todo App",
              desc: "Task management app using JS",
            },
            {
              title: "Calculator",
              desc: "Simple calculator using JavaScript",
            },
            {
              title: "Portfolio",
              desc: "This portfolio website",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 p-5 rounded-xl w-64 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 px-5 text-center"
      >
        <h2 className="text-3xl font-bold text-sky-400 mb-6">
          Contact Me
        </h2>

        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 mb-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 mb-3"
          />

          <textarea
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 mb-3"
          />

          <button
            onClick={saveMessage}
            className="bg-sky-400 text-black px-5 py-3 rounded-md font-bold hover:bg-sky-500 transition"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`mt-3 font-semibold ${
                status.includes("saved")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </div>

        <hr className="my-10 border-slate-700 max-w-xl mx-auto" />

        <h2 className="text-3xl font-bold text-sky-400 mb-6">
          Saved Messages
        </h2>

        {messages.map((msg, index) => (
          <div
            key={index}
            className="max-w-xl mx-auto bg-slate-800 p-4 rounded-lg mb-4 border-l-4 border-sky-400 text-left"
          >
            <b>{msg.name}</b> ({msg.email})

            <br />

            <small className="text-slate-400">
              {msg.time}
            </small>

            <p className="mt-2">
              {msg.message}
            </p>

            <button
              onClick={() =>
                deleteMessage(index)
              }
              className="mt-3 bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </section>

      <footer className="bg-gray-900 text-center py-5 mt-10">
        © 2026 My Portfolio | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;