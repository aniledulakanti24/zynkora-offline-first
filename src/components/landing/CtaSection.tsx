import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to run your business offline?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70">
          Join hundreds of businesses that trust Zynkora for seamless operations.
          Start your free 14-day trial today.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/login">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              Book Free Demo
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
