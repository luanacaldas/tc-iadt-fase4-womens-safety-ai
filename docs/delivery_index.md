# Indice de Entrega - Aurora Care AI

## Sistema

- Dashboard/API: `http://127.0.0.1:8000`
- API: `app/api.py`
- Pipeline central: `aurora_pipeline.py`
- CLI: `run_local_pipeline.py`

## Relatorios finais

- Relatorio academico: `data/results/final_academic_report.md`
- Relatorio academico HTML: `data/results/final_academic_report.html`
- Relatorio experimental: `data/results/experiment_report.md`
- Relatorio experimental HTML: `data/results/experiment_report.html`
- Resumo do caso: `data/results/case_summary.md`
- Resumo do caso HTML: `data/results/case_summary.html`

## Documentacao academica

- Identidade do projeto: `docs/project_identity.md`
- Arquitetura multimodal: `docs/multimodal_architecture.md`
- Estrategia de bases publicas: `docs/public_dataset_strategy.md`
- Roadmap de datasets: `docs/research_dataset_roadmap.md`
- Design trauma-informado: `docs/trauma_informed_design.md`
- Model cards: `docs/model_cards.md`
- Matriz de requisitos: `docs/requirements_traceability.md`
- Roteiro de apresentacao: `docs/presentation_script.md`

## Experimentos e modelos

- Manifesto RAVDESS/CREMA-D: `data/manifests/emotion_video_manifest.csv`
- Manifesto DAiSEE: `data/manifests/daisee_manifest.csv`
- Modelo emocional de audio: `models/audio_emotion_baseline/audio_emotion_baseline.joblib`
- Modelo visual DAiSEE: `models/daisee_visual_baseline/daisee_visual_baseline.joblib`

## Validacao

Executar:

```powershell
python -m unittest discover -s tests
```

Status atual: 3 testes passando.
