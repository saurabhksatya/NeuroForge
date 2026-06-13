from fastapi import FastAPI
import pandas as pd
from fastapi import UploadFile, File, Form, HTTPException
from pydantic import BaseModel
from typing import List
from train import train_models
from fastapi.middleware.cors import CORSMiddleware

class TrainingRequest(BaseModel):
    target_column: str

    models: List[str]

    rf_n_estimators: int = 100
    rf_max_depth: int = 10

    knn_neighbors: int = 5

    gb_estimators: int = 100

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=False, # Must be False if allow_origins=["*"]
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
async def root():
    return {"message": "Hello, World!"}


@app.get("/health")
async def health():
    return {"status": "ok"}

from sklearn.datasets import (
    load_iris,
    load_breast_cancer
)

@app.get("/datasets/iris")
def iris_dataset():
    data = load_iris()

    df = pd.DataFrame(
        data.data,
        columns=data.feature_names
    )

    df["target"] = data.target

    return {
        "rows": len(df),
        "columns": list(df.columns)
    }


@app.get("/datasets/breast-cancer")
def breast_cancer_dataset():
    data = load_breast_cancer()

    df = pd.DataFrame(
        data.data,
        columns=data.feature_names
    )

    return {
        "rows": len(df),
        "columns": list(df.columns)
    }

@app.post("/train")
async def train(
    config: str = Form(...),
    file: UploadFile = File(...)
):
    import json

    settings = TrainingRequest(**json.loads(config))

    if file.filename.endswith(".csv"):
        df = pd.read_csv(file.file)

    elif file.filename.endswith(".xlsx"):
        df = pd.read_excel(file.file)

    else:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type"
        )

    result = train_models(
        df=df,
        target_variable=settings.target_column,
        selected_models=settings.models,
        rf_n_estimators=settings.rf_n_estimators,
        rf_max_depth=settings.rf_max_depth,
        knn_neighbors=settings.knn_neighbors,
        gb_estimators=settings.gb_estimators,
    )

    return result