"use client";

import ClassificationReport from "@/components/Classification-Report";
import ConfusionMatrix from "@/components/Confusion-Matrix";
import Metrics from "@/components/Metric";
import ModelAnswer from "@/components/model-answer";
import Navbar from "@/components/Navbar";
import Selection from "@/components/selection";
import { useState } from "react";

export default function Home() {
  const [selectedDataset, setSelectedDataset] = useState("iris");
  const [selectedTarget, setSelectedTarget] = useState("");
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [rfTrees, setRfTrees] = useState(100);
  const [maxDepth, setMaxDepth] = useState(10);
  const [knnK, setKnnK] = useState(5);
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] flex flex-col gap-xl p-xl w-screen mx-auto">
        <Selection
          selectedDataset={selectedDataset}
          onDatasetChange={setSelectedDataset}
          selectedTarget={selectedTarget}
          onTargetChange={setSelectedTarget}
          selectedModels={selectedModels}
          onModelChange={(value) =>
            setSelectedModels((current) =>
              current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value],
            )
          }
          rfTrees={rfTrees}
          onRfTreesChange={setRfTrees}
          maxDepth={maxDepth}
          onMaxDepthChange={setMaxDepth}
          knnK={knnK}
          onKnnKChange={setKnnK}
        />
        {selectedModels.map((modelName) => (
          <ModelAnswer
            key={modelName}
            modelName={modelName}
            selectedDataset={selectedDataset}
            selectedTarget={selectedTarget}
            rfTrees={rfTrees}
            maxDepth={maxDepth}
            knnK={knnK}
          />
        ))}
      </main>
    </>
  );
}
