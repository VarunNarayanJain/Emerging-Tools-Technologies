import { useEffect, useRef} from "react"
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
  
  Area,
  AreaChart,
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

// --- Custom Tooltip ---
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[]
  label?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-3 border border-orange-200 dark:border-orange-900/30">
        {label && (
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
            {label}
          </p>
        )}
        {payload.map((entry, i) => (
          <p key={i} className="text-sm font-semibold" style={{ color: entry.color }}>
            {entry.name}: <span className="text-gray-900 dark:text-white">{entry.value}{entry.name === "Students" ? "" : "%"}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

// --- Pie label renderer ---
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  if (percent < 0.1) return null
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function DataCharts() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".chart-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=150",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
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
      {/* subtle bg decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-100/40 dark:bg-orange-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Data Behind the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Crisis
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real statistics showing why early counselling interventions can
            change student outcomes
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* ---- CHART 1: Dropout Reasons (Pie) ---- */}
          <div className="chart-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-900/30 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Top Dropout Reasons
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  % of students citing each factor
                </p>
              </div>
            </div>
            <div className="flex-1 min-h-0" style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dropoutReasonsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={88}
                    dataKey="value"
                  >
                    {dropoutReasonsData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => (
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {value}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
              Source: Gallup / Lumina Foundation, 2023
            </p>
          </div>

          {/* ---- CHART 2: Counselor Ratio (Bar) ---- */}
          <div className="chart-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-900/30 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Counselor-to-Student Ratio
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Students per counselor by tier
                </p>
              </div>
            </div>
            <div className="flex-1 min-h-0" style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={counselorRatioData}
                  margin={{ top: 12, right: 8, left: -16, bottom: 4 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="students" name="Students" radius={[6, 6, 0, 0]} barSize={44}>
                    {counselorRatioData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
              Source: ASCA National Report, 2023
            </p>
          </div>

          {/* ---- CHART 3: Early Intervention (Area) ---- */}
          <div className="chart-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-900/30 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Impact of Early Counselling
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Cumulative dropout % over 6 semesters
                </p>
              </div>
            </div>
            <div className="flex-1 min-h-0" style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={interventionData}
                  margin={{ top: 12, right: 8, left: -16, bottom: 4 }}
                >
                  <defs>
                    <linearGradient id="colorNo" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ea580c" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#ea580c" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorYes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="semester"
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={false}
                    tickLine={false}
                    unit="%"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => (
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {value === "noIntervention"
                          ? "No Intervention"
                          : "Early Counselling"}
                      </span>
                    )}
                  />
                  <Area
                    type="monotone"
                    dataKey="noIntervention"
                    name="noIntervention"
                    stroke="#ea580c"
                    strokeWidth={2.5}
                    fill="url(#colorNo)"
                  />
                  <Area
                    type="monotone"
                    dataKey="earlyCounselling"
                    name="earlyCounselling"
                    stroke="#16a34a"
                    strokeWidth={2.5}
                    fill="url(#colorYes)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
              Source: National Center for Education Statistics
            </p>
          </div>
        </div>

        {/* Bottom summary strip */}
        <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl border border-orange-200 dark:border-orange-900/30 shadow-md p-5 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">29.2%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">National 6-yr Dropout Rate</p>
          </div>
          <div className="w-px bg-orange-200 dark:bg-orange-900/30" />
          <div className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">385:1</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Avg. Counselor Ratio</p>
          </div>
          <div className="w-px bg-orange-200 dark:bg-orange-900/30" />
          <div className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">~70%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Dropout Reduction w/ Early Counselling</p>
          </div>
          <div className="w-px bg-orange-200 dark:bg-orange-900/30" />
          <div className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">43.1M</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">U.S. College Dropouts</p>
          </div>
        </div>
      </div>
    </section>
  )
}