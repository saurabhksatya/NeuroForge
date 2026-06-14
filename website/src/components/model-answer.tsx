import ClassificationReport from "./Classification-Report";
import ConfusionMatrix from "./Confusion-Matrix";
import Metrics from "./Metric";
import { datasets, modelOptions } from "@/schema/models1";
import { useEffect, useState } from "react";

interface ModelAnswerProps {
  modelName: string;
  selectedDataset: string;
  selectedTarget: string;
  rfTrees: number;
  maxDepth: number;
  knnK: number;
  customFile: File | null;
  onResultUpdate?: (
    modelName: string,
    result: ModelResultSummary | null,
  ) => void;
}

interface ModelResultSummary {
  accuracy: number;
  cv_score: number;
}

interface ModelResult extends ModelResultSummary {
  confusion_matrix: number[][];
  classification_report: Record<string, any>;
}

export default function ModelAnswer({
  modelName,
  selectedDataset,
  selectedTarget,
  rfTrees,
  maxDepth,
  knnK,
  customFile,
  onResultUpdate,
}: ModelAnswerProps) {
  const [modelResult, setModelResult] = useState<ModelResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trainModel = async () => {
      if (selectedDataset === "custom" && !customFile) {
        return;
      }
      if (!selectedTarget) {
        return;
      }

      try {
        setLoading(true);
        let file: File;

        if (selectedDataset === "custom") {
          if (!customFile) return;
          file = customFile;
        } else {
          // Get dataset file path
          const dataset = datasets.find((d) => d.id === selectedDataset);
          if (!dataset) {
            console.error("Dataset not found");
            return;
          }

          // Fetch the CSV file
          const fileResponse = await fetch(dataset.file);
          if (!fileResponse.ok) {
            console.error("Failed to fetch dataset file");
            return;
          }
          const blob = await fileResponse.blob();
          file = new File([blob], dataset.file, { type: "text/csv" });
        }

        // Prepare config
        const config = {
          target_column: selectedTarget,
          models: [
            modelOptions.find((model) => model.value === modelName)?.label,
          ],
          rf_n_estimators: rfTrees,
          rf_max_depth: maxDepth,
          knn_neighbors: knnK,
          gb_estimators: 100,
        };

        // Create FormData
        const formData = new FormData();
        formData.append("config", JSON.stringify(config));
        formData.append("file", file);

        // Send request to backend
        const response = await fetch(
          (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000") +
            "/train",
          {
            method: "POST",
            body: formData,
          },
        );

        if (!response.ok) {
          let errorMsg = "Unknown error";
          try {
            const errorData = await response.json();
            errorMsg = errorData.detail || JSON.stringify(errorData);
          } catch {
            try {
              errorMsg = await response.text();
            } catch {
              errorMsg = `Server returned status ${response.status}`;
            }
          }
          console.error(`Error training model ${modelName}:`, errorMsg);
          return;
        }

        const result = await response.json();
        console.log(`Results for ${modelName}:`, result);

        // Extract model-specific results
        const modelLabel = modelOptions.find(
          (model) => model.value === modelName,
        )?.label;
        if (modelLabel && result.models && result.models[modelLabel]) {
          const modelData = result.models[modelLabel] as ModelResult;
          setModelResult(modelData);
          onResultUpdate?.(modelName, {
            accuracy: modelData.accuracy,
            cv_score: modelData.cv_score,
          });
        } else {
          onResultUpdate?.(modelName, null);
        }
      } catch (error) {
        console.error(`Failed to train model ${modelName}:`, error);
        onResultUpdate?.(modelName, null);
      } finally {
        setLoading(false);
      }
    };

    trainModel();
  }, [
    modelName,
    selectedDataset,
    customFile,
    selectedTarget,
    rfTrees,
    maxDepth,
    knnK,
    onResultUpdate,
  ]);

  return (
    <>
      <section className="col-span-12 lg:col-span-4 flex flex-col gap-gutter mt-5">
        <div className="bg-surface-container rounded-xl p-lg border border-outline-variant flex flex-col gap-xs">
          <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
            {modelOptions.find((model) => model.value === modelName)?.label}
          </span>
          {loading && (
            <span className="text-xs text-on-surface-variant">Loading...</span>
          )}
        </div>
      </section>
      {modelResult && (
        <>
          <Metrics
            accuracy={modelResult.accuracy}
            cvScore={modelResult.cv_score}
          />
          <ClassificationReport report={modelResult.classification_report} />
          <ConfusionMatrix matrix={modelResult.confusion_matrix} />
        </>
      )}

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded-sm md:my-10" />
    </>
  );
}
