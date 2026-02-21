/**
 * TitleSlide — hero / cover / section-divider template
 *
 * Best for: opening slide, act dividers, big announcements
 * Layout: full-screen centered, large headline, subtitle, optional badge
 *
 * To use:
 *   1. Copy this file to src/slides/MyTitleSlide.jsx
 *   2. Replace the content variables below
 *   3. Import and add to the slides array in src/App.jsx
 */
import React from 'react';
import Slide from '../../components/Slide';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react'; // swap to any lucide icon

const TitleSlide = () => {
    // ─── Replace everything below with your own content ──────────────────────

    const badge = 'Your Conference · Month Year';          // or remove the badge block
    const headline = 'Your Presentation';
    const headlineHighlight = 'Title';                     // the part shown in gradient
    const subtitle = 'A compelling one-liner that explains what this talk is about.';
    const subtext = 'Supporting detail or speaker name.'; // or remove this line

    // ─────────────────────────────────────────────────────────────────────────

    return (
        <Slide className="text-center items-center justify-center">
            <div className="flex flex-col items-center gap-8 relative z-10">

                {/* Eyebrow badge — delete this block if you don't need a label */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-mono text-primary"
                >
                    <Sparkles size={14} /> {badge}
                </motion.div>

                {/* Headline */}
                <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                        {headline} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-secondary">
                            {headlineHighlight}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    {/* Remove this line if you don't need a third line */}
                    <p className="text-base text-slate-500">{subtext}</p>
                </div>
            </div>

            {/* Ambient background blobs — tweak colours to suit your theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
            </div>
        </Slide>
    );
};

export default TitleSlide;
