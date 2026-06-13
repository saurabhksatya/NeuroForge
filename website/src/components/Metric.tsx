export default function Metrics() {
  return (
    <section className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
      <div className="bg-surface-container rounded-xl p-lg border border-outline-variant flex flex-col gap-xs">
        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
          Accuracy Score
        </span>
        <div className="flex items-baseline gap-xs">
          <span className="font-headline-xl text-headline-xl text-primary font-bold">
            0.9667
          </span>
        </div>
        <div className="mt-base h-1 w-full bg-surface-variant rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[96.67%]"></div>
        </div>
      </div>
      <div className="bg-surface-container rounded-xl p-lg border border-outline-variant flex flex-col gap-xs">
        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
          Cross-Validation
        </span>
        <div className="flex items-baseline gap-xs">
          <span className="font-headline-xl text-headline-xl text-secondary font-bold">
            0.9524
          </span>
        </div>
        <div className="mt-base h-1 w-full bg-surface-variant rounded-full overflow-hidden">
          <div className="h-full bg-secondary w-[95.24%]"></div>
        </div>
      </div>
    </section>
  );
}
