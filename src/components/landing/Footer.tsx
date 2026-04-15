export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-lg font-bold text-primary">Zynkora</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zynkora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
