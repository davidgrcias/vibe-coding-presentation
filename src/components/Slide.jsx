import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ title, children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`absolute inset-0 w-full h-full flex flex-col p-6 md:p-12 bg-background text-foreground overflow-y-auto overflow-x-hidden ${className}`}
        >
            <div className="flex-grow w-full max-w-7xl mx-auto flex flex-col justify-center min-h-min">
                {title && (
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-8 text-center shrink-0"
                    >
                        {title}
                    </motion.h1>
                )}
                <div className="w-full text-lg md:text-xl leading-relaxed text-slate-300">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default Slide;
