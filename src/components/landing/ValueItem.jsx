import { Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
export default function ValueItem({ icon: Icon, title, text, color }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e8dfd9] bg-white">
        <Icon className={`h-5 w-5 ${color}`} />
      </div>

      <div>
        <h3 className="text-base font-semibold text-slate-700">{title}</h3>
        <p className="mt-1 text-sm leading-7 text-slate-500">{text}</p>
      </div>
    </div>
  );
}
