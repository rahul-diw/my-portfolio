import React from 'react';

export default function ProjectStats({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-neutral-800/60">
      {stats.map((stat, idx) => (
        <div 
          key={idx} 
          className="flex flex-col justify-center px-3 py-1.5 rounded-lg bg-neutral-950/50 border border-neutral-800/40 backdrop-blur-sm"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-500">{stat.label}</span>
          <span className="text-sm font-mono text-neutral-200 font-semibold">{stat.value}</span>
        </div>
      ))}
    </div>
  );
} 