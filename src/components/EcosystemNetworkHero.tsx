import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  ArrowRight, 
  Layers,
  X
} from 'lucide-react';

interface NodeItem {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  problemSignal: string;
  unlockedCapability: string;
}

interface EdgeItem {
  source: string;
  target: string;
  label: string;
  reason: string;
  activeAtStage: number;
}

const NODES: NodeItem[] = [
  {
    id: 'creators',
    label: 'Creators & Writers',
    category: 'Creation',
    x: 180,
    y: 120,
    targetX: 250,
    targetY: 180,
    color: '#55E6D0',
    problemSignal: 'Secondary digital streaming royalties unpaid after broadcast syndication.',
    unlockedCapability: 'Original high-concept cultural IP and direct-to-audience emotional loyalty.'
  },
  {
    id: 'workforce',
    label: 'Technical Crew',
    category: 'Workforce',
    x: 100,
    y: 340,
    targetX: 220,
    targetY: 300,
    color: '#9B8CFF',
    problemSignal: 'Unregulated 24-hr shifts and payment settlements delayed 120+ days.',
    unlockedCapability: 'Specialized optical engineering, physical rigging, and on-set crisis resolution.'
  },
  {
    id: 'studios',
    label: 'Production Studios',
    category: 'Enterprise',
    x: 360,
    y: 80,
    targetX: 420,
    targetY: 170,
    color: '#F4BD67',
    problemSignal: 'Unpredictable pre-production delays causing 40% budget inflation.',
    unlockedCapability: 'Scale execution, capital aggregation, and theatrical distribution networks.'
  },
  {
    id: 'platforms',
    label: 'OTT & Streaming',
    category: 'Distribution',
    x: 680,
    y: 140,
    targetX: 580,
    targetY: 200,
    color: '#55E6D0',
    problemSignal: 'Subscriber churn following premiere drops; high regional acquisition costs.',
    unlockedCapability: 'Direct consumer telemetry, global cloud streaming delivery, and multi-lingual cataloging.'
  },
  {
    id: 'post',
    label: 'VFX & Post',
    category: 'Technical',
    x: 740,
    y: 320,
    targetX: 570,
    targetY: 310,
    color: '#9B8CFF',
    problemSignal: 'Compressed turnarounds forcing unpaid artist overtime on locked release dates.',
    unlockedCapability: 'Photorealistic virtual production, Dolby Atmos mastering, and automated dubbing.'
  },
  {
    id: 'audiences',
    label: 'Regional Audiences',
    category: 'Audience',
    x: 440,
    y: 440,
    targetX: 400,
    targetY: 360,
    color: '#F5F6FA',
    problemSignal: 'Multiplex ticket price exclusion and lack of accessibility captions.',
    unlockedCapability: 'Grassroots word-of-mouth momentum and diaspora ticket pre-commitments.'
  },
  {
    id: 'knowledge',
    label: 'Guilds & Legal Data',
    category: 'Governance',
    x: 270,
    y: 450,
    targetX: 310,
    targetY: 280,
    color: '#A5ADBD',
    problemSignal: 'Guild jurisdictions fragmented across state borders during interstate shoots.',
    unlockedCapability: 'Arbitration authority, verified craft accreditation, and historical legal precedents.'
  },
  {
    id: 'capital',
    label: 'Institutional Capital',
    category: 'Finance',
    x: 520,
    y: 50,
    targetX: 460,
    targetY: 110,
    color: '#F4BD67',
    problemSignal: 'High risk premium applied due to lack of audited completion guarantees.',
    unlockedCapability: 'Low-cost banking debt (11-13%) replacing usurious private informal loans (30%+).'
  },
  {
    id: 'tech',
    label: 'Indic AI & Metadata',
    category: 'Technology',
    x: 620,
    y: 420,
    targetX: 490,
    targetY: 290,
    color: '#55E6D0',
    problemSignal: 'Foreign AI engines misinterpreting Indian dialectal and cultural idioms.',
    unlockedCapability: 'Sovereign Indic language subtitling, dubbing synchronization, and automated cue-sheets.'
  }
];

const EDGES: EdgeItem[] = [
  { source: 'creators', target: 'studios', label: 'Development Milestones', reason: 'Standardized milestone contracts prevent option hoarding and accelerate greenlights.', activeAtStage: 1 },
  { source: 'studios', target: 'capital', label: 'Completion Bonds', reason: 'Audited pre-production health diagnostics allow banks to underwrite credit.', activeAtStage: 2 },
  { source: 'workforce', target: 'studios', label: 'Milestone Escrow', reason: 'Milestone escrow releases crew payments within 14 days.', activeAtStage: 2 },
  { source: 'studios', target: 'platforms', label: 'Performance Transparency', reason: 'Streaming performance metrics align syndication revenues with creators.', activeAtStage: 1 },
  { source: 'post', target: 'platforms', label: 'Asset Delivery Handover', reason: 'Unified asset handovers eliminate conform errors on multilingual releases.', activeAtStage: 3 },
  { source: 'tech', target: 'post', label: 'Dialect Localization', reason: 'AI dubbing with human cultural review unlocks 10 regional versions concurrently.', activeAtStage: 3 },
  { source: 'audiences', target: 'platforms', label: 'Demand Telemetry', reason: 'Pre-commitment subscription demand directly informs regional commissioning.', activeAtStage: 3 },
  { source: 'knowledge', target: 'workforce', label: 'Craft Verification', reason: 'Union-backed verified digital credentials ensure fair wage standards.', activeAtStage: 2 },
  { source: 'tech', target: 'creators', label: 'Cue-Sheet Fingerprinting', reason: 'Broadcast fingerprinting guarantees real-time royalty attribution to lyricists.', activeAtStage: 3 }
];

interface EcosystemNetworkHeroProps {
  onExploreSystem: () => void;
  onUnderstandProblem: () => void;
}

export const EcosystemNetworkHero: React.FC<EcosystemNetworkHeroProps> = ({
  onExploreSystem,
  onUnderstandProblem
}) => {
  const [activeStage, setActiveStage] = useState<number>(3); // 0: Isolated, 1: Signals, 2: Clustering, 3: Coordinated
  const [selectedNode, setSelectedNode] = useState<NodeItem | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = window.setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const stages = [
    { label: '01 Isolated Silos', title: 'Fragmented Realities' },
    { label: '02 Signals', title: 'Signal Discovery' },
    { label: '03 Clusters', title: 'Root-Cause Clustering' },
    { label: '04 Synchronized', title: 'Coordinated Pathways' },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#090B10]">
      {/* Layered ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#55E6D0]/[0.08] via-[#9B8CFF]/[0.03] to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Text Block - Clean, Razor-sharp */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#55E6D0] uppercase font-semibold">
              Problem Intelligence Infrastructure
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#F5F6FA] tracking-tight leading-[1.08] mb-6">
            An entire ecosystem creates value.{' '}
            <span className="text-[#9AA3B5] font-normal">What if it could solve problems together?</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9AA3B5] leading-relaxed mb-8 max-w-2xl font-normal">
            SolutionSynq transforms fragmented stakeholder experiences across Indian entertainment into connected knowledge, validated insights, and coordinated action.
          </p>

          {/* Action CTAs - Button-in-Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onExploreSystem}
              className="group pl-5 pr-2.5 py-2.5 text-xs font-mono font-semibold rounded-full bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/95 hover:shadow-[0_0_30px_rgba(85,230,208,0.35)] active:scale-[0.98] transition-all flex items-center gap-2.5"
            >
              <span>Explore Methodology</span>
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowRight className="w-3 h-3 text-[#090B10]" />
              </div>
            </button>

            <button
              onClick={onUnderstandProblem}
              className="px-5 py-2.5 text-xs font-mono font-medium rounded-full border border-white/10 hover:border-white/25 text-[#F5F6FA] hover:bg-white/[0.03] active:scale-[0.98] transition-all"
            >
              <span>The Problem</span>
            </button>
          </div>
        </div>

        {/* LIVING NETWORK VISUALIZATION CONTAINER - DOUBLE-BEZEL HARDWARE CHASSIS */}
        <div className="hardware-chassis shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative">
          <div className="hardware-chassis-inner overflow-hidden relative">
            
            {/* Header Controls */}
            <div className="px-5 py-3 border-b border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-[#9AA3B5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0]" />
              <span>Living Network</span>
              <span className="text-white/20">/</span>
              <span className="text-[#F5F6FA]">{stages[activeStage].title}</span>
            </div>

            {/* Stage Selector */}
            <div className="flex items-center gap-1">
              {stages.map((stg, idx) => (
                <button
                  key={stg.label}
                  onClick={() => {
                    setActiveStage(idx);
                    setIsPlaying(false);
                  }}
                  className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                    activeStage === idx 
                      ? 'bg-white/10 text-[#55E6D0] font-semibold' 
                      : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                  }`}
                >
                  {stg.label}
                </button>
              ))}

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 text-[#9AA3B5] hover:text-[#F5F6FA] ml-1"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
              >
                {isPlaying ? <RotateCcw className="w-3 h-3 text-[#55E6D0]" /> : <Play className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* Canvas Surface */}
          <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] bg-[#090B10] select-none">
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 840 500" 
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Edges */}
              {EDGES.map((edge) => {
                const isVisible = activeStage >= edge.activeAtStage;
                if (!isVisible && activeStage === 0) return null;

                const src = NODES.find(n => n.id === edge.source);
                const tgt = NODES.find(n => n.id === edge.target);
                if (!src || !tgt) return null;

                const useTarget = activeStage >= 2;
                const sx = useTarget ? src.targetX : src.x;
                const sy = useTarget ? src.targetY : src.y;
                const tx = useTarget ? tgt.targetX : tgt.targetX * 0.95 + 10;
                const ty = useTarget ? tgt.targetY : tgt.targetY * 0.95 + 10;

                return (
                  <g key={`${edge.source}-${edge.target}`}>
                    <line
                      x1={sx}
                      y1={sy}
                      x2={tx}
                      y2={ty}
                      stroke={activeStage === 3 ? '#55E6D0' : '#2A3447'}
                      strokeWidth={activeStage === 3 ? 1.5 : 1}
                      strokeOpacity={activeStage === 3 ? 0.6 : 0.3}
                      strokeDasharray={activeStage === 1 ? '3 3' : undefined}
                      className="transition-all duration-700"
                    />

                    {activeStage >= 2 && (
                      <circle r="2.5" fill="#55E6D0" opacity="0.8">
                        <animateMotion
                          path={`M${sx},${sy} L${tx},${ty}`}
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {NODES.map((node) => {
                const useTarget = activeStage >= 2;
                const cx = useTarget ? node.targetX : node.x;
                const cy = useTarget ? node.targetY : node.y;
                const isSelected = selectedNode?.id === node.id;
                const isHovered = hoveredNodeId === node.id;

                return (
                  <g 
                    key={node.id} 
                    className="cursor-pointer transition-transform duration-700"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                  >
                    {/* Outer glowing ring */}
                    {(isSelected || isHovered) && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="18"
                        fill="none"
                        stroke={node.color}
                        strokeWidth="1.5"
                        strokeOpacity="0.6"
                        className="animate-pulse"
                      />
                    )}

                    {/* Node Core with ambient glow */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 6 : 4.5}
                      fill={isSelected ? '#F5F6FA' : node.color}
                      className="transition-all duration-300"
                    />

                    {/* Label */}
                    <text
                      x={cx}
                      y={cy + 18}
                      textAnchor="middle"
                      fill="#F5F6FA"
                      fontSize="11"
                      fontFamily="Google Sans Flex, sans-serif"
                      fontWeight={isSelected ? '600' : '400'}
                      className="pointer-events-none select-none tracking-tight"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Selected Node Inspector Drawer - Quiet & Clean */}
            {selectedNode && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-[#0E121B]/95 border border-white/10 shadow-2xl backdrop-blur-xl z-20 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedNode.color }} />
                    <h4 className="font-display font-semibold text-sm text-[#F5F6FA]">
                      {selectedNode.label}
                    </h4>
                  </div>
                  <button 
                    onClick={() => setSelectedNode(null)} 
                    className="text-[#9AA3B5] hover:text-[#F5F6FA] p-0.5"
                    aria-label="Close"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded bg-[#090B10] border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-[#F4BD67] block mb-0.5">
                      Friction Signal
                    </span>
                    <p className="text-[#9AA3B5]">
                      {selectedNode.problemSignal}
                    </p>
                  </div>

                  <div className="p-2.5 rounded bg-[#090B10] border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-[#55E6D0] block mb-0.5">
                      Unlocked Capability
                    </span>
                    <p className="text-[#9AA3B5]">
                      {selectedNode.unlockedCapability}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="px-5 py-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#9AA3B5]">
            <span>Click any node above to inspect structural signals.</span>
            <span>Conceptual Model</span>
          </div>

          </div>
        </div>

      </div>
    </section>
  );
};
