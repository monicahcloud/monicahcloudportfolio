import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import ContactSocial from "@/components/contact/ContactSocial";

const websiteTypes = [
  "Collaboration",
  "Speaking Opportunity",
  "Business Inquiry",
  "Website or Branding",
  "AI / Data Consulting",
  "Mentorship",
  "Prayer / Encouragement",
  "Podcast / Interview",
  "General Connection",
  "Other",
];

export default function ContactPage() {
  const form = useRef(null);
  const [selectedWebsite, setSelectedWebsite] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_ecjoxco", "template_8s24eyo", form.current, {
        publicKey: "XnLTFneXRVkwkphGD",
      })
      .then(
        () => {
          e.target.reset();
          setSelectedWebsite("");
          setStatus("sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8f3ee] px-4 py-16 md:px-6 lg:px-8">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full border border-[#f3d8c8]/70" />
        <div className="absolute right-[-80px] top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,#fbd9ca_0%,#f3c5d7_45%,#d8c1f2_78%,transparent_100%)] opacity-70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-44 w-96 rounded-full bg-[radial-gradient(circle,#bde9e9_0%,transparent_70%)] opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="font-display text-[3rem] leading-[0.95] text-[#155f69] md:text-[4.4rem]">
            Let’s connect,
            <br />
            <span className="text-[#412279]">encourage & grow together.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Whether you want to collaborate, ask a question, share your story,
            discuss an opportunity, or simply connect — I’d genuinely love to
            hear from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT INFO CARD */}
          <div className="rounded-[30px] bg-gradient-to-br from-[#2f1651] via-[#3e2670] to-[#0c8891] p-7 text-white shadow-[0_20px_50px_rgba(45,20,70,0.16)] md:p-8">
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-7 w-7 text-[#f4ba97]" />
            </div>

            <h3 className="font-display text-[2.4rem] leading-none">
              My inbox is always open.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-8 text-white/85">
              I believe meaningful connections can inspire growth, healing,
              creativity, and purpose. Whether it’s encouragement,
              collaboration, conversation, or opportunity — you’re welcome here.
            </p>

            <div className="mt-8 space-y-5">
              <ContactInfoItem
                icon={Mail}
                title="Email"
                text="monicahcloud@gmail.com"
                href="mailto:monicahcloud@gmail.com"
              />

              <ContactInfoItem
                icon={Phone}
                title="Phone"
                text="404-703-7133"
                href="tel:4047037133"
              />

              <ContactInfoItem
                icon={MapPin}
                title="Location"
                text="Atlanta, GA USA"
              />
            </div>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#f4ba97]">
                Find me online
              </p>
              <ContactSocial />
            </div>
          </div>

          {/* FORM CARD */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-[30px] border border-[#ece2dc] bg-white/70 p-6 shadow-[0_14px_36px_rgba(80,50,120,0.06)] backdrop-blur-md md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className={inputClass}
                />
              </Field>

              <Field label="Phone">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone"
                  className={inputClass}
                />
              </Field>

              <Field label="What would you like to connect about?">
                <select
                  name="dropdown"
                  value={selectedWebsite}
                  onChange={(e) => setSelectedWebsite(e.target.value)}
                  className={inputClass}>
                  <option value="">Select a topic</option>
                  {websiteTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {selectedWebsite && (
              <div className="mt-4 rounded-2xl border border-[#efe3dc] bg-[#f8f3ee] px-4 py-3 text-sm text-[#4b2d79]">
                Selected a topic:{" "}
                <span className="font-semibold">{selectedWebsite}</span>
              </div>
            )}

            <Field label="Message" className="mt-4">
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Share what’s on your heart, what you'd like to connect about, or how I can support you..."
                className={`${inputClass} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#0f7f87] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0c6a71] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto">
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>

            {status === "sent" && (
              <p className="mt-4 text-sm font-medium text-[#0f7f87]">
                Thank you! Your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "mt-2 w-full rounded-2xl border border-[#e7dcd5] bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0f7f87] focus:ring-4 focus:ring-[#0f7f87]/10";

function Field({ label, children, className = "" }) {
  return (
    <label
      className={`block text-sm font-semibold text-[#4b2d79] ${className}`}>
      {label}
      {children}
    </label>
  );
}

function ContactInfoItem({ icon: Icon, title, text, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
        <Icon className="h-5 w-5 text-[#f4ba97]" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/75">{text}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition hover:translate-x-1">
        {content}
      </a>
    );
  }

  return content;
}
