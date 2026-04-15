import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Operations Manager, SteelTech Industries",
    quote: "Zynkora solved our biggest pain point — tracking attendance across 3 factory shifts without internet. Payroll errors dropped to zero.",
    rating: 5,
  },
  {
    name: "Dr. Amina Osei",
    role: "Administrator, GreenValley Hospital",
    quote: "Our rural hospital had constant connectivity issues. Zynkora lets us manage 120+ staff seamlessly. The offline sync is magical.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "CEO, QuickBuild Construction",
    quote: "We replaced 4 different tools with Zynkora. One platform for attendance, payroll, and employee management. Saved us hours every week.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-warning text-warning" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
