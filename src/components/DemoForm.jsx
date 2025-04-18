import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function DemoForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate(); // ✅ added hook

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const { data, error } = await supabase
        .from("demo_requests")
        .insert([formData]);

      if (error) {
        console.error("Supabase Error:", error.message);
        setErrorMsg(error.message);
        setStatus("error");
      } else {
        console.log("Submitted successfully:", data);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      setErrorMsg("Unexpected error occurred.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full bg-white p-6 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Request a Demo</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white w-full py-3 rounded hover:bg-indigo-700 transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-3 text-center">Submitted successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-3 text-center">
            Submission failed. {errorMsg || "Try again."}
          </p>
        )}
      </form>

      {/* ✅ Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="text-indigo-600 underline mt-6 text-sm hover:text-indigo-800"
      >
        ← Back to Home
      </button>
    </div>
  );
}
