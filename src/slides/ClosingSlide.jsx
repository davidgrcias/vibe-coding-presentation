import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const ClosingSlide = () => {
    return (
        <Slide title="Conclusion">
            <div className="flex flex-col items-center justify-center h-full gap-8">
                {/* Visual Header */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex gap-4 mb-4"
                >
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-primary">
                        <MessageSquare size={48} />
                    </div>
                    <div className="p-4 bg-secondary/10 rounded-2xl border border-secondary/20 text-secondary">
                        <Users size={48} />
                    </div>
                </motion.div>

                {/* Main Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                        Q&A & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sharing</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium">
                        Let's discuss. What's <span className="text-white italic">your</span> vibe for the future of coding?
                    </p>
                </motion.div>

                {/* Discussion Points */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mt-4"
                >
                    {['Thoughts?', 'Challenges?', 'Best Prompt?', 'Demo Request?'].map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-semibold">
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* Social Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex gap-8 text-slate-500 mt-12 pt-8 border-t border-slate-800/50"
                >
                    <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                        <Github size={18} /> @yourhandle
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                        <Linkedin size={18} /> in/yourprofile
                    </a>
                </motion.div>
            </div>
        </Slide>
    );
};

export default ClosingSlide;
