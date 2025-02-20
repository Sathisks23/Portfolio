"use client";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setContactDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactDetails.name || !contactDetails.email || !contactDetails.message) {
      setMessage({ text: "All fields are required", type: "error" });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/addContact", contactDetails);
      console.log("Success Response:", response.data);

      setMessage({ text: response.data?.message || "Message sent successfully!", type: "success" });
      setContactDetails({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("API Error:", error.response?.data || error.message);
      setMessage({ text: String(error.response?.data?.error || "Something went wrong!"), type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  return (
    <div className="p-6 mx-auto max-w-md bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>

      {message.text && (
        <div className={`p-2 text-sm text-center mt-3 rounded ${message.type === "error" ? "text-red-700 bg-red-100" : "text-green-700 bg-green-100"}`}>
          {message.text}
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contactDetails.name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactDetails.email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-black"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={contactDetails.message}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-black"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 disabled:bg-gray-500"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
