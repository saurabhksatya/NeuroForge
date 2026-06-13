export default function Selection() {
  return (
    <section className="glass-panel p-lg rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl items-end">
      <div className="flex flex-col gap-xs">
        <label className="font-label-mono text-label-mono text-on-surface-variant">
          SELECT DATASET
        </label>
        <select className="bg-surface-container-low border border-outline-variant rounded-lg p-sm focus:border-primary focus:ring-0 text-on-surface">
          <option>Iris</option>
          <option>Wine Quality</option>
          <option>Boston Housing</option>
          <option>MNIST Handwritten Digits</option>
        </select>
      </div>
      <div className="flex flex-col gap-xs">
        <label className="font-label-mono text-label-mono text-on-surface-variant">
          TARGET VARIABLE
        </label>
        <select className="bg-surface-container-low border border-outline-variant rounded-lg p-sm focus:border-primary focus:ring-0 text-on-surface">
          <option>sepal length (cm)</option>
          <option>petal length (cm)</option>
          <option>target_class</option>
        </select>
      </div>
      <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="flex flex-col gap-xs">
          <div className="flex justify-between items-center">
            <label className="font-label-mono text-label-mono text-on-surface-variant">
              RF TREES
            </label>
            <span className="font-label-mono text-primary" id="rf-trees-val">
              100
            </span>
          </div>
          <input className="custom-slider" max="200" min="1" type="range" />
        </div>
        <div className="flex flex-col gap-xs">
          <div className="flex justify-between items-center">
            <label className="font-label-mono text-label-mono text-on-surface-variant">
              MAX DEPTH
            </label>
            <span className="font-label-mono text-primary" id="max-depth-val">
              10
            </span>
          </div>
          <input className="custom-slider" max="20" min="1" type="range" />
        </div>
        <div className="flex flex-col gap-xs">
          <div className="flex justify-between items-center">
            <label className="font-label-mono text-label-mono text-on-surface-variant">
              KNN K
            </label>
            <span className="font-label-mono text-primary" id="knn-val">
              5
            </span>
          </div>
          <input
            className="custom-slider"
            max="15"
            min="1"
            type="range"
            value="5"
          />
        </div>
      </div>
    </section>
  );
}
