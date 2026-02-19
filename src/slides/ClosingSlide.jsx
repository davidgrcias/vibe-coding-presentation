import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const ClosingSlide = () => {
    return (
        <Slide title="Start Your Journey">
            <div className="flex flex-col items-center justify-center h-full gap-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                >
                    <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        "AI gak akan menggantikan programmer.<br />
                        Tapi programmer yang pake AI <br />
                        akan menggantikan yang enggak."
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-primary to-secondary p-[2px] rounded-full"
                >
                    <button className="bg-background px-8 py-3 rounded-full text-white font-bold hover:bg-transparent transition-colors">
                        Coba Install Sekarang
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex gap-8 text-slate-400 mt-12"
                >
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                        <Github size={20} /> github.com/username
                    </a>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                        <Linkedin size={20} /> linkedin.com/in/username
                    </a>
                </motion.div>
            </div>
        </Slide>
    );
};

export default ClosingSlide;
