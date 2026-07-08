import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#fcfcfc]" />

      {/* Aurora Blob 1 */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full blur-[120px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(180,180,180,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Aurora Blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] right-[-120px] w-[650px] h-[650px] rounded-full blur-[140px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(120,120,120,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Center Soft Glow */}
      <motion.div
        animate={{
          opacity: [0.18, 0.3, 0.18],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(220,220,220,0.16) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}