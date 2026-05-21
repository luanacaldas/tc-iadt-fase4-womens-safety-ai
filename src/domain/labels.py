"""Aurora Care AI — unified label taxonomy and dataset-to-domain mappings."""
from __future__ import annotations

from typing import Literal

# Canonical Aurora labels used across all modalities
AuroraLabel = Literal[
    "psychological_distress",
    "depression_signal",
    "anxiety_or_fear",
    "visual_discomfort",
    "obstetric_risk",
    "fetal_risk",
    "safety_anomaly",
    "normal_or_low_risk",
]

AURORA_LABELS: list[str] = [
    "psychological_distress",
    "depression_signal",
    "anxiety_or_fear",
    "visual_discomfort",
    "obstetric_risk",
    "fetal_risk",
    "safety_anomaly",
    "normal_or_low_risk",
]

# ---------------------------------------------------------------------------
# RAVDESS emotion → Aurora label mapping
# ---------------------------------------------------------------------------
RAVDESS_EMOTION_MAP: dict[str, AuroraLabel] = {
    "neutral": "normal_or_low_risk",
    "calm": "normal_or_low_risk",
    "happy": "normal_or_low_risk",
    "sad": "depression_signal",
    "angry": "psychological_distress",
    "fearful": "anxiety_or_fear",
    "disgust": "psychological_distress",
    "surprised": "normal_or_low_risk",
}

# RAVDESS filename position 3 → emotion name
RAVDESS_CODE_TO_EMOTION: dict[str, str] = {
    "01": "neutral",
    "02": "calm",
    "03": "happy",
    "04": "sad",
    "05": "angry",
    "06": "fearful",
    "07": "disgust",
    "08": "surprised",
}

# ---------------------------------------------------------------------------
# EATD-Corpus depression severity → Aurora label mapping
# Scores are SDS (Self-rating Depression Scale), range ~20-80
# ---------------------------------------------------------------------------
def eatd_severity_to_aurora(sds_score: float) -> AuroraLabel:
    """Map SDS depression score to Aurora label."""
    if sds_score >= 63:
        return "depression_signal"
    elif sds_score >= 53:
        return "psychological_distress"
    elif sds_score >= 40:
        return "anxiety_or_fear"
    else:
        return "normal_or_low_risk"


# ---------------------------------------------------------------------------
# DAiSEE engagement → Aurora label mapping
# ---------------------------------------------------------------------------
DAISEE_LABEL_MAP: dict[str, AuroraLabel] = {
    "boredom_high": "visual_discomfort",
    "boredom_low": "normal_or_low_risk",
    "confusion_high": "visual_discomfort",
    "confusion_low": "normal_or_low_risk",
    "frustration_high": "psychological_distress",
    "frustration_low": "normal_or_low_risk",
    "engagement_high": "normal_or_low_risk",
    "engagement_low": "visual_discomfort",
}

# ---------------------------------------------------------------------------
# Cardiotocography (CTG) → Aurora label mapping
# ---------------------------------------------------------------------------
CTG_NSP_MAP: dict[int, AuroraLabel] = {
    1: "normal_or_low_risk",   # Normal
    2: "obstetric_risk",       # Suspect
    3: "fetal_risk",           # Pathological
}

CTG_RISK_LEVEL_MAP: dict[int, str] = {
    1: "ROTINA",
    2: "MONITORAR",
    3: "URGENTE",
}

# ---------------------------------------------------------------------------
# Maternal Health Risk → Aurora label mapping
# ---------------------------------------------------------------------------
MATERNAL_RISK_MAP: dict[str, AuroraLabel] = {
    "low risk": "normal_or_low_risk",
    "mid risk": "obstetric_risk",
    "high risk": "fetal_risk",
}

MATERNAL_RISK_LEVEL_MAP: dict[str, str] = {
    "low risk": "ROTINA",
    "mid risk": "MONITORAR",
    "high risk": "URGENTE",
}

# ---------------------------------------------------------------------------
# XD-Violence → Aurora label mapping (proxy only)
# ---------------------------------------------------------------------------
XD_VIOLENCE_MAP: dict[str, AuroraLabel] = {
    "abuse": "safety_anomaly",
    "fighting": "safety_anomaly",
    "shooting": "safety_anomaly",
    "riot": "safety_anomaly",
    "explosion": "safety_anomaly",
    "car_accident": "safety_anomaly",
    "normal_activities": "normal_or_low_risk",
}
