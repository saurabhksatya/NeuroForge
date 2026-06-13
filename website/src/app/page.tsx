import Metrics from "@/components/Metric";
import Navbar from "@/components/Navbar";
import Selection from "@/components/selection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] p-gutter lg:p-xl flex flex-col gap-xl">
        <Selection />
        <Metrics />
      </main>
    </>
  );
}
