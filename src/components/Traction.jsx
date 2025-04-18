// src/components/Traction.jsx
import { motion } from "framer-motion";

export default function Traction() {
  return (
    <section className="py-24 bg-white px-6" id="traction">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
        >
          Real-World Impact
        </motion.h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          MemoTag is already being used by hospitals and caregivers to detect decline early, track symptoms, and support families with data-backed care decisions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="bg-indigo-50 p-6 rounded-xl text-left"
          >
            <h3 className="text-3xl font-bold text-indigo-600">12+</h3>
            <p className="mt-2 text-slate-700">Hospitals Piloting</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-50 p-6 rounded-xl text-left"
          >
            <h3 className="text-3xl font-bold text-indigo-600">300+</h3>
            <p className="mt-2 text-slate-700">Patients Monitored</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-indigo-50 p-6 rounded-xl text-left"
          >
            <h3 className="text-3xl font-bold text-indigo-600">92%</h3>
            <p className="mt-2 text-slate-700">Accuracy in Decline Detection</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
