/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TrendingDown, Users, HeartPulse } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts"

gsap.registerPlugin(ScrollTrigger)

// --- Data ---
const dropoutReasonsData = [
  { name: "Emotional Stress", value: 52, color: "#ea580c" },
  { name: "Mental Health", value: 42, color: "#f97316" },
  { name: "Financial Pressure", value: 38, color: "#fb923c" },
  { name: "Work Obligations", value: 30, color: "#fdba74" },
  { name: "Family Issues", value: 22, color: "#fed7aa" },
]

const counselorRatioData = [
  { name: "Recommended", students: 250, fill: "#16a34a" },
  { name: "U.S. Average", students: 385, fill: "#ea580c" },
  { name: "Under-funded", students: 550, fill: "#991b1b" },
  { name: "Critical", students: 740, fill: "#7f1d1d" },
]

const interventionData = [
  { semester: "S1", noIntervention: 12, earlyCounselling: 4 },
  { semester: "S2", noIntervention: 18, earlyCounselling: 6 },
  { semester: "S3", noIntervention: 24, earlyCounselling: 7 },
  { semester: "S4", noIntervention: 29, earlyCounselling: 9 },
  { semester: "S5", noIntervention: 33, earlyCounselling: 10 },
  { semester: "S6", noIntervention: 38, earlyCounselling: 11 },
]

// --- Tooltips ---
const PieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-2 border border-orange-200 dark:border-orange-900/30">
        <p className="text-xs font-semibold text-gray-900 dark:text-white">{payload[0].name}</p>
        <p className="text-sm font-bold text-orange-600">{payload[0].value}%</p>
      </div>
    )
  }
  return null
}

const BarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-2 border border-orange-200 dark:border-orange-900/30">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-sm font-bold text-gray-900 dark:text-white">{payload[0].value} students</p>
      </div>
    )
  }
  return null
}

const AreaTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-3 border border-orange-200 dark:border-orange-900/30">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">{label}</p>
        <p className="text-xs font-semibold text-red-600">No Intervention: {payload[0]?.value}%</p>
        <p className="text-xs font-semibold text-green-600">Early Counselling: {payload[1]?.value}%</p>
      </div>
    )
  }
  return null
}

// --- Pie label ---
const renderPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.1) return null
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

// --- Individual Chart Components ---
function PieChartCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-900/30 p-6 flex-shrink-0" style={{ width: 360 }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
          <TrendingDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Top Dropout Reasons</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">% of students citing each factor</p>
        </div>
      </div>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dropoutReasonsData}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderPieLabel}
              outerRadius={85}
              dataKey="value"
              stroke="none"
            >
              {dropoutReasonsData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<PieTooltip />} />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ fontSize: 11, color: "#6b7280" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">Source: Gallup / Lumina Foundation, 2023</p>
    </div>
  )
}

function BarChartCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-900/30 p-6 flex-shrink-0" style={{ width: 360 }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
          <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Counselor-to-Student Ratio</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Students per counselor by tier</p>
        </div>
      </div>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={counselorRatioData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#6b7280" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#6b7280" }} axisLine={false} tickLine={false} domain={[0, 800]} />
            <Tooltip content={<BarTooltip />} />
            <Bar dataKey="students" radius={[6, 6, 0, 0]} barSize={44}>
              {counselorRatioData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">Source: ASCA National Report, 2023</p>
    </div>
  )
}

function AreaChartCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-900/30 p-6 flex-shrink-0" style={{ width: 360 }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
          <HeartPulse className="w-5 h-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Impact of Early Counselling</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Cumulative dropout % over 6 semesters</p>
        </div>
      </div>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={interventionData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <defs>
              <linearGradient id="gradNo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ea580c" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ea580c" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradYes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="semester" tick={{ fontSize: 11, fill: "#6b7280" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#6b7280" }} axisLine={false} tickLine={false} unit="%" domain={[0, 45]} />
            <Tooltip content={<AreaTooltip />} />
            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ fontSize: 11, color: "#6b7280" }}>
                  {value === "noIntervention" ? "No Intervention" : "Early Counselling"}
                </span>
              )}
            />
            <Area type="monotone" dataKey="noIntervention" name="noIntervention" stroke="#ea580c" strokeWidth={2.5} fill="url(#gradNo)" dot={{ r: 3, fill: "#ea580c", stroke: "#fff", strokeWidth: 2 }} />
            <Area type="monotone" dataKey="earlyCounselling" name="earlyCounselling" stroke="#16a34a" strokeWidth={2.5} fill="url(#gradYes)" dot={{ r: 3, fill: "#16a34a", stroke: "#fff", strokeWidth: 2 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">Source: National Center for Education Statistics</p>
    </div>
  )
}

// --- Infinite Moving Charts Carousel ---
// Duplicates the 3 cards so the loop is seamless
function InfiniteCharts({ direction = "left", speed = "fast" }: { direction?: "left" | "right"; speed?: "fast" | "normal" | "slow" }) {
  const [start, setStart] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && innerRef.current) {
      // Clone all children so it loops seamlessly
      const clone = innerRef.current.cloneNode(true) as HTMLDivElement
      innerRef.current.appendChild(clone)
    }
  }, [])

  useEffect(() => {
    if (containerRef.current && innerRef.current) {
      // Defer setStart to avoid cascading renders
      const id = requestAnimationFrame(() => setStart(true))
      return () => cancelAnimationFrame(id)
    }
  }, [])

  const durationMap = { fast: "2s", normal: "40s", slow: "60s" }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full"
    >
      <div
        ref={innerRef}
        className="flex gap-6"
        style={{
          animation: start
            ? `${direction === "left" ? "scrollLeft" : "scrollRight"} ${durationMap[speed]} linear infinite`
            : "none",
        }}
      >
        <PieChartCard />
        <BarChartCard />
        <AreaChartCard />
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

// --- Main Section ---
export function DataCharts() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".chart-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=150",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-900 relative overflow-hidden"
    >
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-100/40 dark:bg-orange-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14 px-6 chart-header">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Data Behind the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Crisis
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real statistics showing why early counselling interventions can change student outcomes
          </p>
        </div>

        {/* Infinite scrolling chart cards */}
        <InfiniteCharts direction="left" speed="slow" />

        
      </div>
    </section>
  )
}