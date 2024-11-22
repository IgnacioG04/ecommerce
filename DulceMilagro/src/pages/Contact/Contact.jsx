import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data || "Home");
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    setErrClientName("");
    setErrEmail("");
    setErrMessages("");
    setSuccessMsg("");

    if (!clientName) setErrClientName("Enter your Name");
    if (!email) setErrEmail("Enter your Email");
    if (!messages) setErrMessages("Enter your Message");

    if (clientName && email && messages) {
      try {
        // Example integration with a backend API
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ clientName, email, messages }),
        });
        if (response.ok) {
          setSuccessMsg(
            `Thank you, ${clientName}, for reaching out! We will contact you at ${email}.`
          );
          setClientName("");
          setEmail("");
          setMessages("");
        } else {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        setSuccessMsg("Unable to send your message. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form className="pb-20" onSubmit={handlePost}>
          <h1 className="font-titleFont font-semibold text-3xl">
            Fill up a Form
          </h1>
          <div className="w-[500px] flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="text-base font-semibold px-2">
                Name
              </label>
              <input
                id="name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full py-1 border-b-2 px-2 outline-none"
                type="text"
                required
              />
              {errClientName && <p className="text-red-500">{errClientName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-base font-semibold px-2">
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-1 border-b-2 px-2 outline-none"
                type="email"
                required
              />
              {errEmail && <p className="text-red-500">{errEmail}</p>}
            </div>
            <div>
              <label htmlFor="messages" className="text-base font-semibold px-2">
                Messages
              </label>
              <textarea
                id="messages"
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
                className="w-full py-1 border-b-2 px-2 outline-none resize-none"
                required
              ></textarea>
              {errMessages && <p className="text-red-500">{errMessages}</p>}
            </div>
            <button
              type="submit"
              className="w-44 bg-primeColor text-white h-10 font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
