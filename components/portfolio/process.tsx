"use client"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understanding your business goals,target audience and project requirements to define the right digital strategy.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Designing modern interfaces and interactive prototypes to visualize the experience before development begins.",
  },
  {
    number: "03",
    title: "Development & Launch",
    description: "Designing modern interfaces and interactive prototypes to visualize the experience before development begins.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm text-accent uppercase tracking-wider mb-4 block">
              HOW I WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A simple and transparent process to deliver
              <br />
              high-quality digital products.
            </h2>
            <p className="text-muted-foreground mb-12">
              Every project follows a structured workflow that ensures clarity, collaboration and high-quality results from concept to launch.
            </p>

            {/* Process Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-sm text-accent font-medium">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Progress Circle */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background Circle */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-secondary"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset="0"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-foreground">+50</span>
                <span className="text-muted-foreground text-sm mt-2">PROJECTS DELIVERED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
