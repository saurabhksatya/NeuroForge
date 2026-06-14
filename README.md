# NEUROFORGE - AI Model Training Platform

NeuroForge, a web-based machine learning platform that enables users to upload datasets, select target variables, train pre-built ML models, compare performance metrics, and generate predictions through an intuitive interface.

## Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Technology Stack](#technology-stack)
- [How to Run](#how-to-run)
- [Machine Learning Workflow](#machine-learning-workflow)
- [Objectives](#objectives)
- [Future Scope](#future-scope)
- [Project Status](#project-status)

---

## Overview

Machine Learning workflows often require programming knowledge, environment setup, and familiarity with multiple libraries. This platform simplifies the process by providing a unified environment where users can train, evaluate, and compare machine learning models directly through a web interface.

Designed for students, researchers, and beginners, the platform abstracts the complexity of machine learning pipelines while still providing meaningful evaluation metrics and visualizations.

---

## Features

### Dataset Management

- Upload custom CSV datasets
- Use built-in sample datasets
- Automatic dataset processing

### Model Training

- Select target variables
- Train pre-configured machine learning models
- Automated training workflow

### Model Evaluation

- Accuracy score calculation
- Confusion matrix generation
- Performance comparison across models

### Data Visualization

- Graphical result representation using Matplotlib
- Comparative performance charts
- Classification result analysis

### Prediction System

- Generate predictions using trained models
- Evaluate model effectiveness on provided data

---

## How It Works

1. Upload a dataset or select a sample dataset.
2. Choose the target variable for prediction.
3. Select a machine learning model.
4. Train the model and view evaluation metrics, visualizations, and predictions.

---

## Technology Stack

| Component        | Technology            |
| ---------------- | --------------------- |
| Frontend         | HTML, CSS, JavaScript |
| Backend          | Next.js               |
| Machine Learning | Scikit-Learn          |
| Data Processing  | NumPy, Pandas         |
| Visualization    | Matplotlib            |

---

## How to Run

### Backend

1. Open a terminal in `backend/`
2. Install dependencies if needed (from the backend folder):

```bash
pip install -r requirements.txt
```

3. Sync dependencies with `uv`:

```bash
uv sync
```

4. Start the FastAPI app with Uvicorn:

```bash
uv run uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend

1. Open a terminal in `website/`
2. Install dependencies if needed:

```bash
npm install
```

3. Start the Next.js development server:

```bash
npm run dev
```

---

## Machine Learning Workflow

```text
Dataset Input
      ↓
Target Selection
      ↓
Model Training
      ↓
Performance Evaluation
      ↓
Prediction Generation
      ↓
Visualization & Comparison
```

---

## Objectives

- Simplify machine learning experimentation
- Provide a no-code model training experience
- Enable rapid model evaluation and comparison
- Improve accessibility of machine learning tools
- Support educational and research-oriented use cases

---

## Future Scope

- Additional machine learning algorithms
- Hyperparameter tuning
- Model export and sharing
- User authentication
- Dataset management system
- Cloud-based training
- AutoML integration
- Deep learning support
- Real-time training monitoring

---

## Project Status

**Currently in Development**

This project is being developed as a web-based machine learning platform focused on simplifying model training, evaluation, visualization, and prediction workflows for end users.
