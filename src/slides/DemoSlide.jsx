import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const DemoSlide = () => {
    return (
        <Slide title="Live Demo">
            <div className="flex flex-col items-center justify-center h-full gap-8">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-primary"
                >
                    <PlayCircle size={120} />
                </motion.div>

                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-white">Let's see it in action</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Saya akan coba buat fitur simple dalam 5 menit. <br />
                        (Biasanya butuh 1 jam an).
                    </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-lg font-mono text-sm text-green-400 border border-slate-700 mt-8 w-full max-w-xl text-left">
                    <p className="opacity-50">// Prompt Example:</p>
                    <p>"Buatin komponen React untuk dashboard card yang ada chart-nya pake Recharts, styling pake Tailwind, theme dark mode."</p>
                </div>
            </div>
        </Slide>
    );
};

export default DemoSlide;
