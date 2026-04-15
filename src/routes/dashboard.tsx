import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Users, ClipboardCheck, DollarSign, RefreshCw,
  LayoutDashboard, UserPlus, Calendar, FileText,
  LogOut, Menu, X, ChevronDown, Wifi, WifiOff, Clock
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Zynkora" },
      { name: "description", content: "Zynkora dashboard for managing attendance, payroll, and employees." },
    ],
  }),
  component: DashboardPage,
});

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ClipboardCheck, label: "Attendance" },
  { icon: DollarSign, label: "Payroll" },
  { icon: Users, label: "Employees" },
  { icon: FileText, label: "Reports" },
];

const statsCards = [
  { label: "Total Employees", value: "148", change: "+3 this month", icon: Users, color: "text-primary" },
  { label: "Present Today", value: "132", change: "89.2% attendance", icon: ClipboardCheck, color: "text-success" },
  { label: "Payroll (This Month)", value: "$284,500", change: "+2.4% vs last month", icon: DollarSign, color: "text-warning" },
  { label: "Sync Status", value: "Synced", change: "Last: 2 min ago", icon: RefreshCw, color: "text-success" },
];

const recentAttendance = [
  { name: "Sarah Chen", time: "08:02 AM", status: "Present", method: "GPS + Selfie" },
  { name: "James Wilson", time: "08:15 AM", status: "Present", method: "GPS" },
  { name: "Maria Garcia", time: "08:45 AM", status: "Late", method: "Selfie" },
  { name: "Ahmed Hassan", time: "—", status: "Absent", method: "—" },
  { name: "Lisa Park", time: "07:55 AM", status: "Present", method: "GPS + Selfie" },
];

const pendingPayroll = [
  { name: "Engineering Dept", employees: 42, total: "$98,200", status: "Ready" },
  { name: "Operations Dept", employees: 56, total: "$112,400", status: "Pending" },
  { name: "Admin Staff", employees: 28, total: "$52,800", status: "Ready" },
  { name: "Sales Team", employees: 22, total: "$21,100", status: "Review" },
];

function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-16 items-center border-b border-border px-6">
          <span className="text-xl font-bold text-primary">Zynkora</span>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-border p-3">
          <button
            onClick={() => navigate({ to: "/" })}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-64 h-full bg-card shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-6">
              <span className="text-xl font-bold text-primary">Zynkora</span>
              <button onClick={() => setSidebarOpen(false)}><X size={20} /></button>
            </div>
            <nav className="space-y-1 p-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    item.active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
                isOnline
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
              {isOnline ? "Online" : "Offline"}
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                AK
              </div>
              <span className="hidden text-sm font-medium text-foreground sm:block">Admin</span>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <stat.icon size={18} className={stat.color} />
                </div>
                <p className="mt-2 text-2xl font-bold text-card-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Recent Attendance */}
            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h2 className="font-semibold text-card-foreground">Today's Attendance</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="divide-y divide-border">
                {recentAttendance.map((entry) => (
                  <div key={entry.name} className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                        {entry.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{entry.name}</p>
                        <p className="text-xs text-muted-foreground">{entry.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                        entry.status === "Present" ? "bg-success/10 text-success" :
                        entry.status === "Late" ? "bg-warning/10 text-warning" :
                        "bg-destructive/10 text-destructive"
                      }`}>
                        {entry.status}
                      </span>
                      <p className="mt-0.5 text-xs text-muted-foreground">{entry.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payroll Summary */}
            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h2 className="font-semibold text-card-foreground">Payroll Summary</h2>
                <Button variant="ghost" size="sm">Run Payroll</Button>
              </div>
              <div className="divide-y divide-border">
                {pendingPayroll.map((dept) => (
                  <div key={dept.name} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{dept.name}</p>
                      <p className="text-xs text-muted-foreground">{dept.employees} employees</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-card-foreground">{dept.total}</p>
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                        dept.status === "Ready" ? "bg-success/10 text-success" :
                        dept.status === "Pending" ? "bg-warning/10 text-warning" :
                        "bg-primary/10 text-primary"
                      }`}>
                        {dept.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2 className="mb-4 font-semibold text-card-foreground">Quick Actions</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                <UserPlus size={18} className="text-primary" />
                <span>Add Employee</span>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                <ClipboardCheck size={18} className="text-success" />
                <span>Mark Attendance</span>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                <DollarSign size={18} className="text-warning" />
                <span>Generate Payroll</span>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-3">
                <FileText size={18} className="text-primary" />
                <span>View Reports</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
