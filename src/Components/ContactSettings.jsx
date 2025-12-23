import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import emailjs from "emailjs-com";
import { showSuccess, showError } from "../components/ui/toast";

const ContactSettings = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          showSuccess("Message sent successfully 🚀");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          showError("Failed to send message 😢");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contacts" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail />
                <a href="mailto:saniyabhagan26@gmail.com">
                  saniyabhagan26@gmail.com
                </a>
              </div>
              <div className="flex gap-4">
                <Phone />
                <a href="tel:+918767304046">+91 8767304046</a>
              </div>
              <div className="flex gap-4">
                <MapPin />
                Mumbai, Maharashtra, India
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank">
                <Linkedin />
              </a>
              <a href="https://github.com" target="_blank">
                <Github />
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border"
              />

              <textarea
                name="message"
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSettings;
