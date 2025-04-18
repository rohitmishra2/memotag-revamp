import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { supabase } from "./lib/supabaseClient";

// Main one-page site layout
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Traction from "./components/Traction";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Pages
import DemoForm from "./components/DemoForm";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSignup from "./pages/AdminSignup";

function MainSite() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Traction />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener?.subscription?.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/demo" element={<DemoForm />} /> {/* ✅ NEW route */}
        <Route
          path="/admin"
          element={
            session && session.user.email === "rohitmishra9199@gmail.com" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
