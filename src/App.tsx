/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CardData {
  id: number;
  num: string;
  title: string;
  arrow: string;
  body: string;
  keywords: string[];
  color: string;
  rgb: string;
  nodePos: { x: number; y: number };
  nodeColors: { fill: string; stroke: string; text: string };
}

const CARDS: CardData[] = [
  {
    id: 0,
    num: "01 · NETWORK HEALTH",
    title: "Soil Health",
    arrow: "→ regenerative practices spread through relationships",
    body: "Cover crops, composting, agroforestry — these don't spread automatically. They move through trust. When knowledge is concentrated in a few actors, soil innovation stalls. When farmers are disconnected from researchers, adoption slows. A resilient network enables peer learning and collective problem-solving that directly regenerates the land.",
    keywords: ["peer learning", "knowledge flow", "experimentation"],
    color: "#8aab6a",
    rgb: "138, 171, 106",
    nodePos: { x: 450, y: 80 },
    nodeColors: { fill: "#2d3d20", stroke: "#8aab6a", text: "#b5cc8e" }
  },
  {
    id: 1,
    num: "02 · NETWORK HEALTH",
    title: "Knowledge Diffusion",
    arrow: "→ knowledge moves at the speed of trust",
    body: "When the network has multiple bridges, forms thematic clusters around practices, and reduces access asymmetries — knowledge circulates faster and more equitably. A fragile or centralized network creates bottlenecks. Mapping flows shows where diffusion is strong and where it is blocked.",
    keywords: ["AKIS analysis", "bridges", "equity"],
    color: "#7ab3a8",
    rgb: "122, 179, 168",
    nodePos: { x: 700, y: 155 },
    nodeColors: { fill: "#1e3035", stroke: "#7ab3a8", text: "#c4ddd6" }
  },
  {
    id: 2,
    num: "03 · NETWORK HEALTH",
    title: "Farmer Adoption",
    arrow: "→ adoption is about legitimacy, not just information",
    body: "Farmers adopt regenerative practices when they trust the source, see peers succeeding, feel supported, and are connected to economic pathways. A well-structured network strengthens peer-to-peer learning, demonstration effects, resource sharing, and reduces isolation. Without relational infrastructure, even the best practices remain theoretical.",
    keywords: ["legitimacy", "peer validation", "economic pathways"],
    color: "#c4603a",
    rgb: "196, 96, 58",
    nodePos: { x: 760, y: 340 },
    nodeColors: { fill: "#3a1e15", stroke: "#c4603a", text: "#e8a080" }
  },
  {
    id: 3,
    num: "04 · NETWORK HEALTH",
    title: "Economic Resilience",
    arrow: "→ network resilience underpins economic resilience",
    body: "If one key connector leaves, does the system collapse? If one funding stream ends, does collaboration stop? A resilient network distributes leadership, encourages modular clusters, connects local actors to EU opportunities, and enables collective action rather than isolated initiatives. Redundancy is a feature, not inefficiency.",
    keywords: ["redundancy", "distributed leadership", "EU partnerships"],
    color: "#d4a85a",
    rgb: "212, 168, 90",
    nodePos: { x: 200, y: 340 },
    nodeColors: { fill: "#3a2e10", stroke: "#d4a85a", text: "#e8c880" }
  },
  {
    id: 4,
    num: "05 · NETWORK HEALTH",
    title: "Governance Legitimacy",
    arrow: "→ legitimate governance emerges from visible networks",
    body: "Governance is legitimate when actors feel represented, information flows transparently, and informal power structures are acknowledged. If the same few actors dominate coordination, trust erodes. Mapping the network ensures the \"Hive Mind\" is real, the \"Power of Three\" is structurally supported, and no one is systematically excluded.",
    keywords: ["representation", "transparency", "inclusion"],
    color: "#b5cc8e",
    rgb: "181, 204, 142",
    nodePos: { x: 140, y: 155 },
    nodeColors: { fill: "#253020", stroke: "#b5cc8e", text: "#d5e8b5" }
  }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleActive = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      // Scroll to card
      setTimeout(() => {
        cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  return (
    <div className="relative z-10">
      {/* Header */}
      <header className="relative z-10 text-center px-10 pt-16 pb-10 border-b border-straw/15">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[10px] tracking-[0.25em] text-sage uppercase mb-4"
        >
          Thyrea Living Lab · Network Health Framework
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.15] text-cream"
        >
          Regeneration is<br /><em className="italic text-glow">Relational</em>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-sm md:text-base text-straw/70 italic"
        >
          How network health drives ecological and social transformation
        </motion.p>
      </header>

      {/* Principle Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 my-10 mx-auto max-w-[720px] px-10 py-7 border border-glow/30 rounded-[2px] text-center bg-glow/5"
      >
        <p className="font-playfair text-lg italic text-glow leading-relaxed">
          "People and their relationships are our new fuel.” (Thyrea Living Lab)<br />
          ”Network health is the engine of regenerative transition." (Silvia I. Fierăscu, PhD)
        </p>
      </motion.div>

      {/* Network Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 max-w-[1000px] mx-auto px-10 py-5"
      >
        <p className="text-center font-mono text-[10px] tracking-[0.15em] text-straw/35 mb-2.5">
          ↓ explore the network below — click any node or card
        </p>
        
        <svg id="network-canvas" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <defs>
            <filter id="glow-filter">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id="center-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4a85a" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#d4a85a" stopOpacity="0.05"/>
            </radialGradient>
          </defs>

          {/* Ambient center glow */}
          <circle cx="450" cy="240" r="120" fill="url(#center-grad)" opacity="0.5"/>

          {/* Edges */}
          {CARDS.map((card, i) => (
            <motion.line 
              key={`edge-${i}`}
              x1="450" y1="240" x2={card.nodePos.x} y2={card.nodePos.y} 
              stroke={card.nodeColors.stroke} 
              strokeWidth="1.2" 
              strokeDasharray="4,4" 
              initial={{ opacity: 0.4 }}
              animate={{ opacity: activeIndex === i ? 0.8 : 0.4 }}
              transition={{ duration: 0.5 }}
            />
          ))}

          {/* Outer ring connections */}
          {CARDS.map((card, i) => {
            const nextCard = CARDS[(i + 1) % CARDS.length];
            return (
              <line 
                key={`outer-edge-${i}`}
                x1={card.nodePos.x} y1={card.nodePos.y} 
                x2={nextCard.nodePos.x} y2={nextCard.nodePos.y} 
                stroke="rgba(232,213,163,0.12)" 
                strokeWidth="1"
              />
            );
          })}

          {/* Center Node */}
          <g className="cursor-default">
            <circle cx="450" cy="240" r="62" fill="#3d2b1f" stroke="#d4a85a" strokeWidth="1.5" filter="url(#glow-filter)"/>
            <circle cx="450" cy="240" r="55" fill="rgba(212,168,90,0.08)" stroke="rgba(212,168,90,0.2)" strokeWidth="1"/>
            <text x="450" y="232" textAnchor="middle" className="font-playfair text-[13px] font-bold fill-glow">Network</text>
            <text x="450" y="250" textAnchor="middle" className="font-playfair text-[13px] font-bold fill-glow">Health</text>
            <text x="450" y="268" textAnchor="middle" className="font-mono text-[8.5px] fill-glow/60 tracking-widest">the engine</text>
          </g>

          {/* Outer Nodes */}
          {CARDS.map((card, i) => (
            <g 
              key={`node-${i}`} 
              className="cursor-pointer transition-all duration-300"
              onClick={() => toggleActive(i)}
              style={{ transform: activeIndex === i ? 'scale(1.05)' : 'scale(1)', transformOrigin: `${card.nodePos.x}px ${card.nodePos.y}px` }}
            >
              <circle 
                cx={card.nodePos.x} cy={card.nodePos.y} r="44" 
                fill={card.nodeColors.fill} 
                stroke={card.nodeColors.stroke} 
                strokeWidth="1.5"
                filter={activeIndex === i ? 'url(#glow-filter)' : 'none'}
              />
              <circle cx={card.nodePos.x} cy={card.nodePos.y} r="38" fill={`${card.nodeColors.stroke}26`} stroke={`${card.nodeColors.stroke}4D`} strokeWidth="1"/>
              <text x={card.nodePos.x} y={card.nodePos.y - 7} textAnchor="middle" className="font-playfair text-[10px] md:text-[11px] font-bold" fill={card.nodeColors.text}>
                {card.title.split(' ')[0]}
              </text>
              <text x={card.nodePos.x} y={card.nodePos.y + 9} textAnchor="middle" className="font-playfair text-[10px] md:text-[11px] font-bold" fill={card.nodeColors.text}>
                {card.title.split(' ')[1] || ''}
              </text>
            </g>
          ))}

          {/* Pulse rings */}
          <circle cx="450" cy="240" r="70" fill="none" stroke="#d4a85a" strokeWidth="0.5" opacity="0">
            <animate attributeName="r" values="62;90;62" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </motion.section>

      {/* Cards Section */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {CARDS.map((card, i) => (
          <motion.div
            key={`card-${i}`}
            ref={el => cardRefs.current[i] = el}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
            onClick={() => toggleActive(i)}
            className={`
              group relative bg-white/3 border border-straw/10 p-8 cursor-pointer transition-all duration-400 overflow-hidden
              ${activeIndex === i ? 'bg-white/7 border-straw/20' : 'hover:bg-white/6 hover:-translate-y-0.5'}
            `}
          >
            {/* Left border highlight */}
            <div 
              className={`absolute top-0 left-0 w-[3px] h-full transition-transform duration-400 origin-bottom ${activeIndex === i ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}
              style={{ backgroundColor: card.color }}
            />
            
            <div className="font-mono text-[10px] tracking-[0.2em] mb-3" style={{ color: card.color }}>
              {card.num}
            </div>
            <h3 className="font-playfair text-xl font-bold text-cream mb-1.5 leading-tight">
              {card.title}
            </h3>
            <div className="text-[13px] font-mono mb-4 opacity-80" style={{ color: card.color }}>
              {card.arrow}
            </div>
            
            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-[13.5px] leading-relaxed text-cream/70">
                    {card.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {card.keywords.map((kw, kwIdx) => (
                      <span 
                        key={kwIdx} 
                        className="font-mono text-[9px] tracking-wider px-2 py-0.5 border rounded-sm"
                        style={{ borderColor: `rgba(${card.rgb}, 0.4)`, color: card.color }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center p-8 border-t border-straw/10 font-mono text-[10px] tracking-[0.15em] text-straw/30">
        Thyrea Living Lab · Network Health Framework by Silvia I. Fierăscu, PhD · Social Fabrics Research Lab
      </footer>
    </div>
  );
}
