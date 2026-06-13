import { Geist } from "next/font/google";
import { MdTune } from "react-icons/md";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <header className="bg-surface-container border-b border-white/30 flex justify-between items-center w-full px-lg h-16 sticky top-0 z-50">
      <div className="flex items-center gap-sm">
        <span className="px-2">
          <MdTune size={24} />
        </span>
        <h1
          className={`${geistSans.className} font-bold text-on-surface text-2xl`}
        >
          AI Training
        </h1>
      </div>
    </header>
  );
}
