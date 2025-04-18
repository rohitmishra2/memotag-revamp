import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-slate-100 px-6 py-20">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-slate-800 leading-tight"
        >
          AI for Dementia Care
        </motion.h1>
        <p className="mt-6 text-lg text-slate-600">
          Empowering caregivers and doctors with AI-driven cognitive tracking for better care.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
