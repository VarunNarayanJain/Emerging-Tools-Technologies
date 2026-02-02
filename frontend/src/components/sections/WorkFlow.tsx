import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Upload,
  Database,
  Brain,
  Eye,
  MessageCircle,
  Bell,
  ArrowRight,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)
const techStack = [
  {
    name: "Machine Learning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0_2T7QvYteuK6hRVylPfdcJlNwoKW1-Msg&s",
    description: "Predictive risk modeling",
  },
  {
    name: "LLMs & RAG",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    description: "Contextual explanations",
  },
  {
    name: "Vector Database",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description: "Semantic search & retrieval",
  },
  {
    name: "Docker & Kubernetes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduCbNCZimPTZV5YzV0pc_pdxBffP84mVDMg&s",
    description: "Scalable containerized deployment",
  },
  
  
]

// --- Infinite Carousel ---
function TechCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  // Clone items into the DOM once so the loop is seamless
  useEffect(() => {
    if (trackRef.current && trackRef.current.children.length === techStack.length) {
      const clone = trackRef.current.innerHTML
      trackRef.current.insertAdjacentHTML("beforeend", clone)
    }
  }, [])

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex gap-6"
        style={{
          animation: "techScroll 28s linear infinite",
        }}
      >
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-orange-200 dark:border-orange-900/30 bg-white dark:bg-gray-800">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Tech name badge floating on image */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-orange-600 dark:text-orange-400 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {tech.name}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes techScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
export function Workflow() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".workflow-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Data Ingestion",
      description:
        "Upload or sync attendance records, assessment scores, and subject attempt data from existing spreadsheets.",
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Fusion",
      description:
        "All student records are merged into consolidated profiles, enabling holistic performance analysis.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Risk Identification",
      description:
        "Rule-based ML evaluates thresholds for attendance, marks trends, and attempts to classify risk levels.",
      color: "from-orange-600 to-red-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visualization",
      description:
        "Dashboard displays color-coded risk indicators (Green, Yellow, Red) with drill-down capabilities.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "LLM Explanations",
      description:
        "RAG-powered LLM generates contextual explanations and recommendations based on institutional policies.",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Automated Notifications",
      description:
        "Mentors and guardians receive timely alerts for moderate and high-risk students.",
      color: "from-orange-600 to-orange-500",
    },
  ]

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A seamless six-step process from data ingestion to intervention
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="workflow-step flex items-start space-x-6">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:rotate-3`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-sm shadow-lg border-2 border-orange-200 dark:border-orange-900/30">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pb-8 border-l-2 border-orange-200 dark:border-orange-900/30 pl-8 relative">
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -left-3 bottom-0 w-6 h-6 text-orange-500 dark:text-orange-400" />
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Highlight */}
        <div className="mt-20 p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/10 rounded-3xl border border-orange-200 dark:border-orange-900/30 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Powered By Modern Technologies
          </h3>
          
          <TechCarousel />
        </div>
      </div>
    </section>
  )
}