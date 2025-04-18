import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const handleRequestDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  const handleContactClick = () => {
    alert("Redirecting to Contact Section...");
    // Optional: document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="max-w-4xl mx-auto px-4 text-center bg-gradient-to-b from-white to-gray-100 py-16"
      id="cta"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
      >
        Start Monitoring Smarter
      </motion.h2>

      <p className="text-slate-600 mb-8">
        Get access to timely insights and better support.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={handleRequestDemo}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Request a Demo
        </button>

        <button
          onClick={handleContactClick}
          className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
