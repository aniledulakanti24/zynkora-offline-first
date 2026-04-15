import { Factory, GraduationCap, Hospital, Building2 } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Track shift attendance for factory workers offline. Run payroll automatically even in remote industrial zones.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Education",
    description: "Manage staff attendance and payroll in schools with poor connectivity. Works seamlessly in rural areas.",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description: "Hospitals and clinics can track shift rotations, overtime, and payroll without depending on internet.",
  },
  {
    icon: Building2,
    title: "SMEs & Startups",
    description: "Replace multiple fragmented tools with one unified platform. Scale from 20 to 300+ employees effortlessly.",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Industries</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for real-world conditions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From factory floors to remote schools, Zynkora works where others can't.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
