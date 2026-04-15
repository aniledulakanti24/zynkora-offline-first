import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Wifi, WifiOff } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.5_0.2_270/0.15),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80">
            <WifiOff size={14} />
            <span>Works offline, syncs online</span>
          </div>
          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Run your business,
            <br />
            <span className="text-primary-foreground/80">even without internet.</span>
          </h1>
          <p className="animate-fade-in-up-delay mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 lg:text-xl">
            Track attendance, run payroll, and manage operations anywhere.
            Zynkora syncs automatically when you're back online.
          </p>
          <div className="animate-fade-in-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/login">
              <Button variant="hero" size="xl" className="w-full sm:w-auto bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                Book Free Demo
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <Wifi size={18} />
              See How It Works
            </Button>
          </div>
          <div className="animate-fade-in-up-delay-2 mt-8 flex items-center gap-6 text-sm text-primary-foreground/60 sm:justify-center lg:justify-start">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-success" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-success" />
              Free 14-day trial
            </span>
          </div>
        </div>
        <div className="animate-fade-in-up-delay flex-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary-foreground/5 blur-2xl" />
            <img
              src={heroImage}
              alt="Zynkora dashboard preview showing attendance and payroll management"
              className="relative rounded-xl shadow-2xl ring-1 ring-primary-foreground/10"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
