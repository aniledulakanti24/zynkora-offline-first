import { Fingerprint, Calculator, Users, RefreshCw, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Offline Attendance",
    description: "GPS + selfie-based attendance that works without internet. Data syncs automatically when connectivity returns.",
  },
  {
    icon: Calculator,
    title: "Automated Payroll",
    description: "Supports daily, monthly, and hourly salary structures. Auto-calculates overtime, deductions, and net pay.",
  },
  {
    icon: Users,
    title: "Employee Management",
    description: "Add, manage, and organize employee profiles with role-based access for admins, managers, and employees.",
  },
  {
    icon: RefreshCw,
    title: "Smart Sync Engine",
    description: "All actions stored locally and synced automatically. Conflict-safe background syncing ensures data integrity.",
  },
  {
    icon: BarChart3,
    title: "Reports Dashboard",
    description: "Real-time attendance summaries, payroll overviews, and employee insights at your fingertips.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with encrypted local storage and secure cloud synchronization.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Features</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to run operations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One platform to replace your attendance tracker, payroll software, and employee management tools.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
