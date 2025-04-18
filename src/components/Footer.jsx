// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">MemoTag</h3>
          <p className="text-slate-500 text-sm mb-4">
            AI-powered tracking for dementia care. Empowering caregivers and professionals with smarter insights.
          </p>
  
          <div className="flex justify-center space-x-6 text-slate-600 text-sm mb-6">
            <a href="#home" className="hover:text-indigo-600 transition">Home</a>
            <a href="#solution" className="hover:text-indigo-600 transition">How it Works</a>
            <a href="#traction" className="hover:text-indigo-600 transition">Traction</a>
            <a href="#cta" className="hover:text-indigo-600 transition">Get Started</a>
          </div>
  
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} MemoTag. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  