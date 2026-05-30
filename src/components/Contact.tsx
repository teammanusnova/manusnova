import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;
    window.location.href = `mailto:teammanusnova@gmail.com?subject=${encodeURIComponent(`${subject} — Manus Nova`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Info */}
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Contact</p>
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Let's talk.
              </h2>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                Need a prosthetic? Want to donate, volunteer, or collaborate? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:teammanusnova@gmail.com" className="text-foreground hover:text-accent transition-colors font-medium">
                  teammanusnova@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href="https://instagram.com/projectmanusnova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  @projectmanusnova
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                <p className="text-foreground font-medium">
                  The Bronx High School of Science<br />
                  <span className="text-muted-foreground font-normal">75 W 205th St, Bronx, NY 10468</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Workshop Hours</p>
                <p className="text-muted-foreground">
                  Mon–Fri: 3:30–5:30 PM<br />
                  Saturday: 10:00 AM–2:00 PM
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-muted border border-border">
              <p className="text-sm font-semibold text-foreground mb-1">Need a prosthetic?</p>
              <p className="text-sm text-muted-foreground">
                We offer free consultations and custom fittings. Typical turnaround is 2–4 weeks.
                Just send us a message and we'll get back to you.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center gap-4 p-8 rounded-xl border border-border bg-muted">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Your email client is ready.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We've pre-filled your message — just hit send and we'll get back to you soon.
                  </p>
                </div>
                <button onClick={() => setSubmitted(false)} className="text-sm text-accent hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <select
                    name="subject"
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  >
                    <option>Prosthetic Request</option>
                    <option>Donation Inquiry</option>
                    <option>Volunteer Opportunity</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
