import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "TaskFlow Productivity App",
    description: "Productivity tool for remote teams, featuring real-time collaboration and intuitive task management.",
    tags: ["PRODUCT DESIGN", "MOBILE APP", "PROTOTYPING"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    title: "Neura AI Marketing",
    description: "Marketing website for an artificial intelligence startup, utilizing WebGL animations and modern typography.",
    tags: ["WEB DEVELOPMENT", "3D GRAPHICS", "ANIMATION"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    title: "TaskFlow Productivity App",
    description: "Productivity tool for remote teams, featuring real-time collaboration and intuitive task management.",
    tags: ["PRODUCT DESIGN", "MOBILE APP", "PROTOTYPING"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    title: "Neura AI Marketing",
    description: "Marketing website for an artificial intelligence startup, utilizing WebGL animations and modern typography.",
    tags: ["WEB DEVELOPMENT", "3D GRAPHICS", "ANIMATION"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
]

export function Work() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Selected Work
            </h2>
            <p className="text-muted-foreground max-w-lg">
              A selection of websites and e-commerce experiences
designed to combine modern aesthetics,
high performance and real business impact.
            </p>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${index === 0 || index === 3 ? 'md:row-span-1' : ''}`}
            >
              {/* Project Card */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30">
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center overflow-hidden">
                    {/* Mock Dashboard UI */}
                    <div className="w-full h-full p-4 transition-transform duration-500 ease-out group-hover:scale-105">
                      <div className="bg-card/80 rounded-lg h-full p-4 border border-border/50">
                        <div className="h-full flex flex-col gap-2">
                          <div className="flex gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                          </div>
                          <div className="flex-1 flex items-end gap-1">
                            {[30, 50, 40, 70, 60, 80, 55, 90].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-purple-500 to-blue-400 rounded-t group-hover:from-purple-400 group-hover:to-blue-300 transition-colors"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Hover Overlay with Title and Category */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <h4 className="text-white text-lg font-semibold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h4>
                    <span className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.tags[0]}
                    </span>
                  </div>
                  {/* AI Tag for some projects */}
                  {(index === 1 || index === 3) && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 rounded-full border border-accent/30 z-10">
                      <span className="text-xs text-accent font-medium">AI Tech</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground"
                      >
                        {tag} {project.tags.indexOf(tag) < project.tags.length - 1 && "•"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
