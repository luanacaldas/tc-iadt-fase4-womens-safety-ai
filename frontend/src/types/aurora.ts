export interface ModalityScore {
  score_0_1: number;
  evidence?: Record<string, unknown>;
}

export interface CareAssessment {
  carePathway?: string;
  dimensions?: Record<string, number>;
  reviewFocus?: string[];
  guardrails?: string[];
}

export interface Priority {
  riskLevel?: string;
  confidence?: number;
  humanReviewRequired?: boolean;
}

export interface TraceStage {
  stage: string;
  elapsed_ms: number;
}

export interface Trace {
  request_id?: string;
  total_ms?: number;
  stages?: TraceStage[];
}

export interface ClinicalData {
  age?: number;
  systolic_bp?: number;
  diastolic_bp?: number;
  blood_sugar?: number;
  body_temp?: number;
  heart_rate?: number;
}

export interface AuroraReport {
  level: "low" | "medium" | "high" | "critical";
  multimodal_score_0_1: number;
  priority: Priority;
  care_assessment?: CareAssessment;
  modality_scores: Record<string, ModalityScore>;
  metadata?: {
    missing?: string[];
    unavailable?: Record<string, string>;
  };
  weights?: Record<string, number>;
  _trace?: Trace;
  _warnings?: string[];
  _api_elapsed_s?: number;
}

export type AnalysisState =
  | "idle"
  | "uploading"
  | "processing"
  | "done"
  | "error";

export interface Signal {
  signal: string;
  value: number;
  detail?: string;
}

export interface TimelineEvent {
  time: string;
  text: string;
  severity: "info" | "warning" | "critical";
}
