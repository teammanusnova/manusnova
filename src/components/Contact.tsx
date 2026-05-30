import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { ref, visible } = useScrollReveal(0.1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement).value;
    const email   = (form.elements.namedItem("email")   as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;
    window.location.href = `mailto:teammanusnova@gmail.com?subject=${encodeURIComponent(`${subject} — Manus Nova`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass = "w-full h-11 px-4 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent focus:bg-white transition-all";

  return (
    <section id="contact" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Info side */}
            <div className="space-y-12">
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-[0.25em] mb-4">Contact</p>
                <h2 className="text-5xl lg:text-6xl font-black text-zinc-950 leading-[0.9] tracking-tighter mb-6">
                  Let's talk.
                </h2>
                <p className="text-zinc-500 leading-relaxed text-lg">
                  Need a prosthetic? Want to donate, volunteer, or partner with us?
                  We respond to every message.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Email", value: "teammanusnova@gmail.com", href: "mailto:teammanusnova@gmail.com" },
                  { label: "Instagram", value: "@projectmanusnova", href: "https://instagram.com/projectmanusnova" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-zinc-950 font-semibold hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="font-semibold text-zinc-950">The Bronx High School of Science</p>
                  <p className="text-zinc-500 text-sm">75 W 205th St, Bronx, NY 10468</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Workshop Hours</p>
                  <p className="text-zinc-500 text-sm">Mon–Fri: 3:30–5:30 PM · Saturday: 10 AM–2 PM</p>
                </div>
              </div>

              <div className="bg-zinc-950 text-white rounded-2xl p-8">
                <p className="font-bold mb-2">Need a prosthetic?</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  We offer free consultations and custom fittings. Typical turnaround is 2–4 weeks.
                  Just send us a message below.
                </p>
              </div>
            </div>

            {/* Form side */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col justify-center items-start gap-6 bg-white rounded-2xl border border-zinc-100 p-12">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                    <svg className="w-7 h-7 text-zinc-950" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-zinc-950 mb-2">Your email client is ready.</p>
                    <p className="text-zinc-500 leading-relaxed">
                      We've pre-filled your message — just hit send and we'll get back to you soon.
                    </p>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="text-sm text-accent font-semibold hover:underline">
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-zinc-100 p-8 lg:p-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Name</label>
                      <input name="name" type="text" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email</label>
                      <input name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Subject</label>
                    <select name="subject" className={inputClass}>
                      <option>Prosthetic Request</option>
                      <option>Donation Inquiry</option>
                      <option>Volunteer Opportunity</option>
                      <option>General Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us what's on your mind..."
                      className={`${inputClass} h-auto py-3 resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 bg-zinc-950 text-white font-bold text-sm rounded-xl hover:bg-zinc-800 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
