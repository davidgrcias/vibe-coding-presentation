/**
 * QuoteSlide — full-screen centered quote template
 *
 * Best for: expert quotes, bold statements, thought-provoking moments
 * Layout: full-screen centered — icon → large blockquote → attribution → ambient glow
 *
 * To use:
 *   1. Copy this file to src/slides/MyQuoteSlide.jsx
 *   2. Replace the content variables below
 *   3. Import and add to the slides array in src/App.jsx
 */
import React from 'react';
import Slide from '../../components/Slide';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSlide = () => {
    // ─── Replace everything below with your own content ──────────────────────

    // Keep the quote under ~30 words for maximum visual impact
    const quote =
        'Your powerful, thought-provoking quote that makes the audience stop and think. ' +
        'Keep it short and memorable.';

    const author = 'First Last';
    const authorTitle = 'Title / Role / Company';
    const context = 'Where or when this was said'; // set to null to hide

    // ─────────────────────────────────────────────────────────────────────────

    return (
        <Slide className="text-center items-center justify-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">

                {/* Quote icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 rounded-2xl bg-primary/10 border border-primary/20"
                >
                    <Quote size={36} className="text-primary" />
                </motion.div>

                {/* The quote */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight"
                >
                    "{quote}"
                </motion.blockquote>

                {/* Attribution */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <p className="text-xl font-bold text-primary">{author}</p>
                    <p className="text-slate-400 text-sm">{authorTitle}</p>
                    {context && (
                        <p className="text-slate-600 text-xs mt-1 font-mono">{context}</p>
                    )}
                </motion.div>
            </div>

            {/* Ambient glow — adjust colour class to suit your theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
            </div>
        </Slide>
    );
};

export default QuoteSlide;
