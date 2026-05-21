import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center pt-6 pb-2"
    >
      <h1 className="font-serif text-[3.2rem] leading-[1.05] tracking-tight text-aurora-text">
        Aurora<span className="text-aurora-primary">.</span> Care AI
      </h1>
      <p className="mt-3 text-[0.95rem] text-aurora-text-2 max-w-[580px] mx-auto leading-relaxed">
        Aurora combina relato, áudio, vídeo, imagem e dados clínicos para
        análise multimodal de sinais de risco, sofrimento e vulnerabilidade em
        saúde da mulher.
      </p>
    </motion.div>
  );
}
