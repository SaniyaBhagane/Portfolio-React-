import { ArrowUp } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-border bg-card px-4 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Saniya Bhagne. Designed & developed by me.
        </p>

        {/* Back to top */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="
            p-2 rounded-full
            bg-primary/10 text-primary
            hover:bg-primary/20
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
