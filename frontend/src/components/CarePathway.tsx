import { motion } from "framer-motion";
import type { AuroraReport } from "@/types/aurora";
import { PATHWAY_ORDER, PATHWAY_SHORT, PATHWAY_LABELS } from "@/lib/utils";

interface Props {
  report: AuroraReport;
}

export default function CarePathway({ report }: Props) {
  const active = report.care_assessment?.carePathway || "";
  const reviewFocus = report.care_assessment?.reviewFocus || [];
  const guardrails = report.care_assessment?.guardrails || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      {/* Stepper */}
      <div className="flex rounded-xl border border-aurora-border overflow-hidden">
        {PATHWAY_ORDER.map((key) => {
          const isActive = key === active;
          return (
            <div
              key={key}
              className={`flex-1 text-center py-3 px-2 border-r border-aurora-border last:border-r-0 transition-colors
                ${
                  isActive
                    ? "bg-aurora-primary/5 border-b-[2.5px] border-b-aurora-primary"
                    : "bg-aurora-surface"
                }`}
            >
              <p
                className={`text-[0.8rem] font-bold ${isActive ? "text-aurora-primary" : "text-aurora-text-2"}`}
              >
                {PATHWAY_SHORT[key]}
              </p>
              <p className="text-[0.72rem] text-aurora-text-3 mt-0.5">
                {isActive ? "● Ativa" : PATHWAY_LABELS[key]?.split(" ").pop()}
              </p>
            </div>
          );
        })}
      </div>

      {/* Details */}
      {(reviewFocus.length > 0 || guardrails.length > 0) && (
        <details className="mt-3 group">
          <summary className="text-[0.82rem] text-aurora-text-2 font-medium cursor-pointer hover:text-aurora-text transition-colors">
            Detalhes da Trilha de Cuidado
          </summary>
          <div className="mt-2 pl-3 space-y-2 text-[0.82rem] text-aurora-text-2">
            {reviewFocus.length > 0 && (
              <div>
                <p className="font-semibold mb-1">Foco de Revisão:</p>
                <ul className="list-disc list-inside space-y-0.5 text-aurora-text-3">
                  {reviewFocus.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {guardrails.length > 0 && (
              <div>
                <p className="font-semibold mb-1">Guardrails Éticos:</p>
                <ul className="list-disc list-inside space-y-0.5 text-aurora-text-3">
                  {guardrails.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </details>
      )}
    </motion.div>
  );
}
