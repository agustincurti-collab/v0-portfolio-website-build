const stats = [
  { value: "5+", label: "YEARS EXPERIENCE" },
  { value: "50+", label: "PROJECTS COMPLETED" },
  { value: "40+", label: "HAPPY CLIENTS" },
  { value: "10+", label: "WEB TECHNOLOGIES" },
]

export function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
