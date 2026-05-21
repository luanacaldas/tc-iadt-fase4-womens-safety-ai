import { motion } from "framer-motion";
import type { AuroraReport } from "@/types/aurora";
import { buildTimeline } from "@/lib/utils";

interface Props {
  report: AuroraReport;
}

const SEV_COLORS: Record<string, string> = {
  info: "#9A8E86",
  warning: "#B97818",
  critical: "#A83232",
};

export default function EvidenceTimeline({ report }: Props) {
  const events = buildTimeline(report);

  if (events.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="bg-aurora-surface border border-aurora-border rounded-xl p-5"
    >
      <h3 className="font-serif text-[1.05rem] text-aurora-text mb-0.5">
        Linha de Evidências
      </h3>
      <p className="text-[0.82rem] text-aurora-text-3 mb-4">
        Sequência de sinais detectados durante o processamento:
      </p>

      <div className="space-y-0">
        {events.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
            className="flex items-start gap-3 py-2.5 border-b border-aurora-border last:border-0"
          >
            <span className="font-mono text-[0.75rem] text-aurora-text-3 min-w-[48px] pt-0.5">
              {ev.time}
            </span>
            <span
              className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
              style={{
                backgroundColor: SEV_COLORS[ev.severity] || SEV_COLORS.info,
              }}
            />
            <span className="text-[0.85rem] text-aurora-text-2 leading-relaxed">
              {ev.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
