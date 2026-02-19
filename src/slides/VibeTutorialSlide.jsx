import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { FileText, Wrench, MessageSquare, RefreshCw, GitCommit, Rocket } from 'lucide-react';

const VibeTutorialSlide = () => {
    const steps = [
        {
            step: "01",
            icon: <FileText size={22} className="text-blue-400" />,
            title: "Write a Blueprint",
            color: "border-blue-500 bg-blue-500/10",
            accent: "text-blue-400",
            code: `# App Idea: Task Manager
- Users can login (Google)
- See tasks in a list
- Click to complete task
- Mobile friendly`,
            tip: "Don't guess. Write it down first (PRD)."
        },
        {
            step: "02",
            icon: <Wrench size={22} className="text-purple-400" />,
            title: "Choose Smart Tools",
            color: "border-purple-500 bg-purple-500/10",
            accent: "text-purple-400",
            code: `Frontend: Next.js + Tailwind
Backend:  Supabase
Editor:   Cursor / Windsurf`,
            tip: "Use popular tools that AI knows perfectly."
        },
        {
            step: "03",
            icon: <MessageSquare size={22} className="text-green-400" />,
            title: "Talk to AI",
            color: "border-green-500 bg-green-500/10",
            accent: "text-green-400",
            code: `"Create this app using the Blueprint above.
Use the tools I listed.
Start with the Login page."`,
            tip: "Be bossy but specific. Give context."
        },
        {
            step: "04",
            icon: <RefreshCw size={22} className="text-pink-400" />,
            title: "Iterate",
            color: "border-pink-500 bg-pink-500/10",
            accent: "text-pink-400",
            code: `❌ "This doesn't work"
✅ "The login button on /auth
   isn't redirecting to /dashboard
   after success. Fix this."

→ Be specific. Describe the bug,
  not just that there is one.`,
            tip: "Be the Tech Lead — direct, precise, critical."
        },
        {
            step: "05",
            icon: <GitCommit size={22} className="text-yellow-400" />,
            title: "Commit Often",
            color: "border-yellow-500 bg-yellow-500/10",
            accent: "text-yellow-400",
            code: `git add .
git commit -m "feat: add Google
OAuth via Supabase"

# Commit every milestone!
# Easy rollback = fearless iteration`,
            tip: "Version control = your safety net. Always commit."
        },
        {
            step: "06",
            icon: <Rocket size={22} className="text-orange-400" />,
            title: "Ship It",
            color: "border-orange-500 bg-orange-500/10",
            accent: "text-orange-400",
            code: `# Push to GitHub
git push origin main

# Auto-deploy on Vercel
# Done. Live in < 2 minutes.

vercel --prod`,
            tip: "Ship early, ship often. Feedback > Perfection."
        }
    ];

    return (
        <Slide className="!p-4 md:!p-6 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-4">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-2"
                    >
                        Step-by-Step Tutorial
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        How to <span className="text-primary">Vibe Code</span> an App
                    </h1>
                    <p className="text-slate-500 text-sm mt-1">From idea to deployed product, in one loop.</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.08 }}
                            className={`rounded-2xl border ${step.color} p-4 flex flex-col gap-3`}
                        >
                            {/* Step Header */}
                            <div className="flex items-center gap-3">
                                <span className={`text-3xl font-black ${step.accent} opacity-30`}>{step.step}</span>
                                <div>
                                    <div className="flex items-center gap-2">
                                        {step.icon}
                                        <span className="font-bold text-white text-sm">{step.title}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Code Block */}
                            <pre className="text-[9px] md:text-[10px] text-slate-300 bg-black/50 rounded-lg p-3 font-mono leading-relaxed whitespace-pre-wrap overflow-hidden flex-1">
                                {step.code}
                            </pre>

                            {/* Tip */}
                            <p className={`text-[10px] ${step.accent} font-medium italic`}>
                                💡 {step.tip}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-center"
                >
                    <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
                        Repeat Steps 3-4 until done · Total time: hours, not weeks
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default VibeTutorialSlide;
