import { Menu } from "lucide-react";
import { links } from "/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import logo from "/monicahlogo.png";

const NavLinks = () => {
  return (
    <>
      {/* Desktop */}
      <ul className="hidden lg:flex items-center gap-x-8 xl:gap-x-10">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id} className="group relative">
              <a
                href={href}
                className="capitalize text-base font-medium tracking-[0.04em] text-[#155f69] transition hover:text-[#0f7f87]">
                {text}
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-[#f2b38c] transition-all duration-300 group-hover:w-full" />
            </li>
          );
        })}
      </ul>

      {/* Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full border-[#eadfd8] bg-white/80 text-[#155f69] shadow-sm backdrop-blur-md hover:bg-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[88vw] max-w-[360px] border-l border-[#ece2dc] bg-[linear-gradient(180deg,#fffaf7_0%,#f8f3ee_100%)] px-0 text-slate-700 backdrop-blur-xl">
            <SheetHeader className="border-b border-[#efe5df] px-6 pb-5 pt-6 text-left">
              <img
                src={logo}
                alt="Monicah Cloud"
                className="mb-4 h-auto w-[170px] object-contain"
              />

              <SheetTitle className="font-display text-[2rem] leading-none text-[#155f69]">
                Explore
              </SheetTitle>

              <SheetDescription className="mt-2 text-sm leading-7 text-slate-500">
                Faith, purpose, creativity, and the work I’m building.
              </SheetDescription>
            </SheetHeader>

            <nav className="px-4 py-5">
              <ul className="space-y-2">
                {links.map((link) => {
                  const { id, href, text } = link;
                  return (
                    <li key={id}>
                      <a
                        href={href}
                        className="group flex items-center justify-between rounded-[18px] px-4 py-3 capitalize text-[1.06rem] tracking-[0.02em] font-medium text-[#155f69] transition hover:bg-white hover:text-[#0f7f87]">
                        <span>{text}</span>
                        <span className="text-[#f2b38c] transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 border-t border-[#efe5df] pt-6">
                <a
                  href="/resume"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0f7f87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c6a71]">
                  View Resume
                </a>

                <a
                  href="/resources"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#e7d8d0] bg-white px-5 py-3 text-sm font-semibold text-[#4b2d79] transition hover:bg-[#fffaf7]">
                  Browse Resources
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default NavLinks;
