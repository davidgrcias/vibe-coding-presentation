/**
 * TwoColumnSlide — image left + text/bullets right template
 *
 * Best for: case studies, before/after, person + quote, product showcases
 * Layout: source badge → 2-col grid (image | title + desc + bullets) → closing statement
 *
 * To use:
 *   1. Copy this file to src/slides/MyTwoColumnSlide.jsx
 *   2. Place your image in the /public folder
 *   3. Replace the content variables below
 *   4. Import and add to the slides array in src/App.jsx
 */
import React from 'react';
import Slide from '../../components/Slide';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react'; // swap to any lucide icon

const TwoColumnSlide = () => {
    // ─── Replace everything below with your own content ──────────────────────

    const badge = 'Source · Context · Year';
    const title = 'Your Two-Column Title';
    const imageSrc = 'your-image.png';  // file must exist in /public
    const imageAlt = 'Description of the image for accessibility';
    const description =
        'A paragraph of context about this topic. Explain what you are showing ' +
        'and why it matters to the audience in two or three sentences.';

    const bulletPoints = [
        'Key finding or point one — specific, concrete.',
        'Key finding or point two — specific, concrete.',
        'Key finding or point three — specific, concrete.',
    ];

    const closingStatement = 'The single most important conclusion from this slide.';

    // ─────────────────────────────────────────────────────────────────────────

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

                {/* Source / context badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-widest w-fit"
                >
                    {badge}
                </motion.div>

                {/* Two-column grid — stacks vertically on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Left column: image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {/* Polished image container — remove the wrapper div to show raw image */}
                        <div className="bg-slate-900 rounded-3xl border-2 border-primary/20 shadow-[0_0_80px_-20px_rgba(0,229,255,0.3)] overflow-hidden">
                            <img src={imageSrc} alt={imageAlt} className="w-full h-auto block" />
                        </div>
                    </motion.div>

                    {/* Right column: headline + description + bullet list */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                            {title}
                        </h1>

                        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>

                        <div className="flex flex-col gap-3">
                            {bulletPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-3"
                                >
                                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-slate-300 text-sm">{point}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Closing statement banner — remove if not needed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl text-center"
                >
                    <p className="text-white font-black text-lg tracking-tight">{closingStatement}</p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default TwoColumnSlide;
