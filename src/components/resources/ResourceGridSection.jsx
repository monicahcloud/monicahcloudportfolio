import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const amount = container.clientWidth * 0.9;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const getCredit = (item) => {
    if (item.author) return item.author;
    if (item.artist) return item.artist;
    if (item.speaker) return item.speaker;
    return null;
  };

  const getCreditPrefix = () => {
    switch (authorLabel.toLowerCase()) {
      case "artist":
        return "Artist";
      case "speaker":
        return "Speaker";
      case "author":
      default:
        return "Author";
    }
  };

  return (
    <section id={id} className="px-4 pb-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
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

          {/* Carousel Controls */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ddd7] bg-white/70 text-[#0f7f87] transition hover:bg-white"
              aria-label={`Scroll ${title} left`}>
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ddd7] bg-white/70 text-[#0f7f87] transition hover:bg-white"
              aria-label={`Scroll ${title} right`}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const credit = getCredit(item);

            return (
              <article
                key={item.title}
                className="min-w-[85%] snap-start overflow-hidden rounded-[24px] border border-[#ece2dc] bg-white/60 shadow-[0_8px_24px_rgba(80,50,120,0.03)] sm:min-w-[420px] lg:min-w-[360px]">
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

                  {showAuthor && credit && (
                    <p className="mt-1 text-sm font-medium text-[#4b2d79]">
                      {getCreditPrefix()}: {credit}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e8ddd7] px-4 py-2 text-sm font-semibold text-[#0f7f87] transition hover:bg-white">
                    {buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Controls */}
        <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8ddd7] bg-white/70 text-[#0f7f87]"
            aria-label={`Scroll ${title} left`}>
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8ddd7] bg-white/70 text-[#0f7f87]"
            aria-label={`Scroll ${title} right`}>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
