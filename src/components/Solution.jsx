import { motion } from "framer-motion";
import { Brain, Activity, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-indigo-600" />,
    title: "Track Cognitive Decline",
    desc: "Detect early symptoms and monitor progression with simple regular assessments.",
  },
  {
    icon: <Activity className="h-10 w-10 text-indigo-600" />,
    title: "AI-Powered Analysis",
    desc: "Our AI analyzes patterns in behavior and responses to provide actionable insights.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-indigo-600" />,
    title: "Support for Caregivers",
    desc: "Share reports with doctors and caregivers to make informed care decisions.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-slate-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How MemoTag Works
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
