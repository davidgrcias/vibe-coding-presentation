import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ConceptSlide = () => {
    return (
        <Slide title="What is 'Vibe Coding'?">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex-1 space-y-6"
                >
                    <h3 className="text-3xl font-bold text-slate-200">Bukan Robot Menggantikan Kita</h3>
                    <p className="text-slate-400 text-xl">
                        Robot ngerjain yang <span className="text-red-400 line-through">ngebosenin</span>, kita ngerjain yang <span className="text-green-400">seru</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="w-px h-64 bg-slate-700 hidden md:block"
                />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex-1 bg-slate-900 p-8 rounded-xl border border-slate-700"
                >
                    <h3 className="text-2xl font-mono text-primary mb-4">The Methodology</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">1</span>
                            <span className="text-lg">Create First (AI Generates)</span>
                        </div>
                        <ArrowRight className="text-slate-500 ml-2 transform rotate-90 md:rotate-0" />
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">2</span>
                            <span className="text-lg">Review & Understand</span>
                        </div>
                        <ArrowRight className="text-slate-500 ml-2 transform rotate-90 md:rotate-0" />
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">3</span>
                            <span className="text-lg">Dive Later (Refine & Optimize)</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
};

export default ConceptSlide;
