import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-slate-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Growing Dementia Crisis
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Over 55 million people suffer from dementia worldwide. Yet early diagnosis and consistent cognitive tracking are major gaps in current care systems.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              stat: "55M+",
              label: "People with Dementia",
            },
            {
              stat: "75%",
              label: "Cases Undiagnosed",
            },
            {
              stat: "4x",
              label: "Faster decline without tracking",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-indigo-50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              <h3 className="text-3xl font-bold text-indigo-600">{item.stat}</h3>
              <p className="mt-2 text-slate-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
