import { ArrowRight } from "lucide-react";
import { Play } from "lucide-react";

export default function ResourceGridSection({
  id,
  eyebrow,
  title,
  icon: Icon,
  items,
  buttonText,
  showAuthor = false,
  authorLabel = "author",
}) {
  return (
    <section id={id} className="px-4 pb-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3">
          <Icon className="h-5 w-5 text-[#f08f52]" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f7f87]">
              {eyebrow}
            </p>
            <h2 className="font-display mt-1 text-[2rem] leading-none text-[#155f69] md:text-[2.5rem]">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[24px] border border-[#ece2dc] bg-white/60 shadow-[0_8px_24px_rgba(80,50,120,0.03)]">
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-3 inline-flex rounded-full bg-[#f7f1ec] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#f08f52]">
                  {item.topic}
                </div>

                <h3 className="text-xl font-semibold text-slate-700">
                  {item.title}
                </h3>

                {showAuthor && item.author && (
                  <p className="mt-1 text-sm font-medium text-[#4b2d79]">
                    {authorLabel === "artist"
                      ? `By ${item.author}`
                      : `By ${item.author}`}
                  </p>
                )}

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e8ddd7] px-4 py-2 text-sm font-semibold text-[#0f7f87] transition hover:bg-white">
                  {buttonText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
