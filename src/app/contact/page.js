"use client";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contactDetails, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function formHandling(e) {
    e.preventDefault();
    console.log(contactDetails);

    if (!contactDetails.name || !contactDetails.email || !contactDetails.message) {
      setResult("All fields are required");
      setTimeout(() => setResult(""), 2000);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/addContact", contactDetails);
      setApiResponse(response.data.message);
    } catch (error) {
      setApiResponse(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
      setTimeout(() => setApiResponse(""), 3000);
      setDetails({ name: "", email: "", message: "" });
    }
  }

  function inputHandler(e) {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif] m-12">
      <h1 className="text-2xl text-gray-800 font-bold text-center">Contact Us</h1>
      <div>
        {result && <div className="text-red-500">{result}</div>}
        {apiResponse && <div className="text-lime-700 text-sm p-2">{apiResponse}</div>}
        {loading && <div>Loading...</div>}
      </div>
      <form className="mt-8 space-y-4" onSubmit={formHandling}>
        <input
          type="text"
          placeholder="Name"
          onChange={inputHandler}
          name="name"
          value={contactDetails.name}
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={inputHandler}
          name="email"
          value={contactDetails.email}
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
        />
        <textarea
          placeholder="Message"
          rows="4"
          onChange={inputHandler}
          name="message"
          value={contactDetails.message}
          className="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"
        ></textarea>
        <button
          type="submit"
          className="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
