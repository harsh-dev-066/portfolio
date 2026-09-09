import React, { useState } from "react";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { profile } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const FORM_ENDPOINT = "https://getform.io/f/bba2be2d-403a-49d1-8e16-aa19b1602ccf";

const EMPTY = { name: "", email: "", message: "" };

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Jane Doe" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
];

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill in every field." });
      setTimeout(() => setStatus({ type: "", message: "" }), 4000);
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error(response.statusText);

      setFormData(EMPTY);
      setStatus({ type: "success", message: "Message sent — I'll get back to you soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please email me directly instead.",
      });
    } finally {
      setSending(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  };

  const details = [
    { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: FiMapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeading index="06" title="Contact" subtitle="Let's build something." />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <div className="space-y-4">
            <Reveal variant="left" className="glass rounded-2xl p-7">
              <p className="text-base leading-relaxed text-muted">
                Open to senior engineering roles, interesting product problems and collaborations.
                Drop a line and I'll reply within a day or two.
              </p>
            </Reveal>

            {details.map(({ icon: Icon, label, value, href }, i) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Reveal key={label} variant="left" delay={i * 100 + 80}>
                  <Wrapper
                    {...(href ? { href } : {})}
                    className="glass card-hover group flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent2 ring-1 ring-accent/20 transition-transform duration-500 ease-smooth group-hover:scale-110">
                      <Icon size={17} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-widest text-faint">{label}</p>
                      <p className="truncate text-sm font-medium">{value}</p>
                    </div>
                  </Wrapper>
                </Reveal>
              );
            })}
          </div>

          {/* Form */}
          <Reveal variant="right" delay={120} className="glass rounded-2xl p-7 sm:p-8">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map(({ name, label, type, placeholder }) => (
                  <label key={name} className="block">
                    <span className="text-[11px] uppercase tracking-widest text-faint">{label}</span>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange(name)}
                      placeholder={placeholder}
                      autoComplete={name === "email" ? "email" : "name"}
                      className="mt-2 w-full rounded-xl border border-hairline/15 bg-surface/40 px-4 py-3 text-sm text-content placeholder:text-faint/70 transition-all duration-300 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                ))}
              </div>

              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-faint">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me about the role, project or idea…"
                  className="mt-2 w-full resize-none rounded-xl border border-hairline/15 bg-surface/40 px-4 py-3 text-sm text-content placeholder:text-faint/70 transition-all duration-300 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className={`btn btn-primary group ${sending ? "cursor-wait opacity-70" : ""}`}
                >
                  {sending ? "Sending…" : "Send message"}
                  <FiSend
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </button>

                {status.message && (
                  <span
                    className={`flex animate-fade-up items-center gap-1.5 text-sm ${
                      status.type === "success" ? "text-emerald-400" : "text-rose-400"
                    }`}
                    role="status"
                  >
                    {status.type === "success" ? (
                      <FiCheckCircle size={15} />
                    ) : (
                      <FiAlertCircle size={15} />
                    )}
                    {status.message}
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
