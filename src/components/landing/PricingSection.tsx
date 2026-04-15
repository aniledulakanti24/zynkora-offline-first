import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For small teams getting started",
    features: [
      "Up to 25 employees",
      "Offline attendance",
      "Basic payroll",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Up to 150 employees",
      "GPS + selfie attendance",
      "Automated payroll engine",
      "Reports dashboard",
      "Priority support",
      "Role-based access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited employees",
      "All Professional features",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free for 14 days. No credit card required.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 shadow-sm transition-all hover:shadow-md ${
                plan.highlighted
                  ? "border-primary bg-card ring-2 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-card-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/login" className="mt-8 block">
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
