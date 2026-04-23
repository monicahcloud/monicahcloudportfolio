import { Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logo from "/monicahlogo.png";

const quickLinks = [
  { label: "About Me", href: "#about" },
  { label: "What I Do", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Vlog", href: "#vlog" },
  { label: "Resources", href: "#resources" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Let's Connect", href: "#contact" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: Mail, href: "#contact", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-transparent pt-12">
      <div className="mx-auto  ">
        <div className="overflow-hidden bg-gradient-to-r from-[#2f1651] via-[#253d86] to-[#118b96] text-white shadow-[0_18px_50px_rgba(45,20,70,0.18)]">
          <div className="grid gap-10 px-6 py-10 md:px-8 lg:grid-cols-[1.2fr_1fr_1.15fr_0.9fr] lg:px-10">
            {/* Column 1 */}
            <div>
              <img
                src={logo}
                alt="Monicah Cloud"
                className="mb-5 h-auto w-[170px] object-contain brightness-110"
              />

              <p className="max-w-[220px] text-sm leading-7 text-white/85">
                Using my gifts to build, teach, and inspire — all for His glory.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-white">
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/80 transition hover:text-[#f5bd9c]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Let&apos;s Stay Connected
              </h3>

              <p className="mb-5 max-w-[260px] text-sm leading-7 text-white/80">
                Get faith-filled encouragement and updates straight to your
                inbox.
              </p>

              <form className="flex w-full max-w-[320px] overflow-hidden rounded-full bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="bg-[#f4ba97] px-5 text-sm font-semibold text-slate-900 transition hover:bg-[#efab82]">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-start lg:items-end">
              <div className="font-display text-right text-[2.2rem] leading-[0.92] tracking-[-0.02em] text-[#f4c29e] sm:text-[2.8rem]">
                <div>Faith</div>
                <div>Purpose</div>
                <div>Impact</div>
              </div>

              <p className="mt-3 text-right text-sm text-[#f4c29e]/90">
                For His Glory
              </p>

              <div className="mt-2 text-right text-[#f4c29e]">♡</div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-black/10 px-6 py-3 text-xs text-white/70 sm:flex-row md:px-8 lg:px-10">
            <p>© {currentYear} Monicah Cloud. All rights reserved.</p>
            <p>Built with ♡ and purpose.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
