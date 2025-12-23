import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";

/* 
   SOCIAL ICON COMPONENT
 */
const SocialIcon = ({ href, label, children }) => {
  const isMail = href.startsWith("mailto:");

  return (
    <div className="relative group">
      <a
        href={href}
        {...(!isMail && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className="
          relative p-3 rounded-full
          bg-primary/10 text-foreground
          transition-all duration-300
          hover:text-primary hover:scale-110
          before:absolute before:inset-0
          before:rounded-full
          before:bg-primary/40
          before:blur-xl
          before:opacity-0
          hover:before:opacity-100
          animate-pulse
        "
      >
        {children}
      </a>

      {/* Tooltip */}
      <span
        className="
          absolute -top-10 left-1/2 -translate-x-1/2
          px-3 py-1 rounded-md text-xs
          bg-background border border-border
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          pointer-events-none
          whitespace-nowrap
        "
      >
        {label}
      </span>
    </div>
  );
};

/* 
   MAIN COMPONENT
 */
const ContactSettings = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("access_key", "c6dda0a0-e707-49bf-8835-fa4d04ade84b");
    formData.append("subject", "New Portfolio Contact Message");
    formData.append("from_name", "Saniya Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully 🚀");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Great things start with a simple message. Whether you have a project in
          mind or just want to connect, feel free to reach out anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/*  CONTACT INFO  */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <InfoItem
                icon={<Mail />}
                label="Email"
                value="saniyabhagan26@gmail.com"
                href="mailto:saniyabhagan26@gmail.com?subject=Portfolio Inquiry"
              />

              <InfoItem
                icon={<Phone />}
                label="Phone"
                value="+91 8767304046"
                href="tel:+918767304046"
              />

              <InfoItem
                icon={<MapPin />}
                label="Location"
                value="Mumbai, Maharashtra, India"
              />
            </div>

            <div className="mt-10 text-center">
              <h4 className="font-medium mb-6 text-lg">Connect With Me</h4>

              <div className="flex justify-center gap-8">
                <SocialIcon
                  href="https://linkedin.com/in/saniya-bhagne-27140b257/"
                  label="LinkedIn"
                >
                  <Linkedin size={26} />
                </SocialIcon>

                <SocialIcon
                  href="https://github.com/SaniyaBhagane"
                  label="GitHub"
                >
                  <Github size={26} />
                </SocialIcon>

                <SocialIcon
                  href="mailto:saniyabhagan26@gmail.com?subject=Portfolio Inquiry"
                  label="Email"
                >
                  <Mail size={26} />
                </SocialIcon>
              </div>
            </div>
          </div>

          {/*  FORM  */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Your Name"
                name="name"
                placeholder="Enter your full name"
              />

              <Input
                label="Your Email"
                name="email"
                type="email"
                placeholder="your@email.com"
              />

              <Textarea />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {status && (
                <p className="text-sm text-center text-muted-foreground">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/*  FLOATING SOCIAL BAR  */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-5 z-50">
        <SocialIcon
          href="https://linkedin.com/in/saniya-bhagne-27140b257/"
          label="LinkedIn"
        >
          <Linkedin size={22} />
        </SocialIcon>

        <SocialIcon
          href="https://github.com/SaniyaBhagane"
          label="GitHub"
        >
          <Github size={22} />
        </SocialIcon>

        <SocialIcon
          href="mailto:saniyabhagan26@gmail.com"
          label="Email"
        >
          <Mail size={22} />
        </SocialIcon>
      </div>
    </section>
  );
};

/* 
   REUSABLE COMPONENTS
 */
const InfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{label}</h4>
      {href ? (
        <a
          href={href}
          className="text-muted-foreground hover:text-primary transition"
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      required
      className="
        w-full px-4 py-3 rounded-md
        border border-input
        bg-background text-foreground
        placeholder:text-muted-foreground
        transition-all duration-300
        focus:outline-none
        focus:ring-2 focus:ring-primary/70
        hover:border-primary/60
      "
      {...props}
    />
  </div>
);

const Textarea = () => (
  <div>
    <label className="block text-sm font-medium mb-2">Your Message</label>
    <textarea
      name="message"
      rows="4"
      required
      placeholder="Hello, I’d like to discuss a project or collaboration..."
      className="
        w-full px-4 py-3 rounded-md
        border border-input
        bg-background text-foreground
        placeholder:text-muted-foreground
        transition-all duration-300
        focus:outline-none
        focus:ring-2 focus:ring-primary/70
        hover:border-primary/60
        resize-none
      "
    />
  </div>
);

export default ContactSettings;
