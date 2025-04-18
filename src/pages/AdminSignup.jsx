import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminSignup() {
  const [email, setEmail] = useState("rohitmishra9199@gmail.com");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Create Admin Account</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Admin Email"
        className="w-full mb-4 p-3 border border-gray-300 rounded"
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full mb-4 p-3 border border-gray-300 rounded"
        required
      />

      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Sign Up
      </button>

      {status === "success" && (
        <p className="text-green-600 mt-4 text-center">Signup successful!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4 text-center">Signup failed. Check console.</p>
      )}
    </form>
  );
}
