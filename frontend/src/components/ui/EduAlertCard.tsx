import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Brain, TrendingUp, Shield, AlertTriangle, Users, HeartPulse, GraduationCap } from "lucide-react";

export function EduAlertCard() {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 relative group/card hover:shadow-2xl hover:shadow-orange-500/[0.3] dark:hover:shadow-orange-500/[0.2] border border-orange-200 dark:border-orange-900/30 w-full h-auto rounded-3xl p-8">

        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Why Early Counselling Matters
        </CardItem>

        {/* Subtitle */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-orange-600 dark:text-orange-400 text-base font-medium mb-6"
        >
          The Hidden Crisis Behind College Dropout Rates
        </CardItem>

        {/* Image Section */}
        <CardItem translateZ="100" className="w-full mb-6">
          <div className="relative rounded-2xl overflow-hidden border border-orange-300/50 dark:border-orange-800/30">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80"
              alt="Student in counselling session with a professional"
              className="w-full aspect-video object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Floating stat badges */}
            <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-red-600 dark:text-red-400 shadow-lg flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              40% Dropout Rate
            </div>
            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-orange-600 dark:text-orange-400 shadow-lg flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              43.1M Students Affected
            </div>
          </div>
        </CardItem>

        {/* Key Insight Banner */}
        <CardItem translateZ="80" className="w-full mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl p-4 flex gap-3 items-start">
            <div className="w-8 h-8 bg-red-100 dark:bg-red-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-0.5">Critical Finding</p>
              <p className="text-xs text-red-600 dark:text-red-400 leading-relaxed">
                A 2023 Gallup poll found <span className="font-bold">emotional stress (50–53%)</span> and <span className="font-bold">mental health (41–43%)</span> were the top two reasons students dropped out — yet 48 of 50 U.S. states lack the recommended 1:250 counselor-to-student ratio (average is 385:1).
              </p>
            </div>
          </div>
        </CardItem>

        {/* Stats Grid — Real Data */}
        <CardItem translateZ="100" className="w-full mb-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 dark:border-orange-900/20">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                24% Freshman Dropout
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Nearly 1 in 4 first-year students leave before sophomore year — the highest-risk period.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 dark:border-orange-900/20">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-2">
                <Brain className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                40%+ Considered Leaving
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Over 40% of enrolled undergrads have considered dropping out in the past 6 months (Gallup/Lumina, 2022).
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 dark:border-orange-900/20">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-2">
                <HeartPulse className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                385:1 Counselor Ratio
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                The U.S. average is 385 students per counselor — 1.5x worse than the recommended 250:1 limit.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 dark:border-orange-900/20">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Early Intervention Works
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Research shows more counseling sessions directly reduce dropout risk and improve student outcomes.
              </p>
            </div>
          </div>
        </CardItem>

        {/* Why Early Counselling Matters — Short bullets */}
        <CardItem translateZ="70" className="w-full mb-6">
          <div className="bg-orange-50/60 dark:bg-orange-900/10 border border-orange-200/50 dark:border-orange-900/20 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              Why Counselling at Early Stages is Critical
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Catches struggles early:</span> 17% of U.S. high schools have zero counselors, so many students arrive at college already lacking guidance and coping skills.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">First-gen students at highest risk:</span> FGLI students are 2× more likely to drop out; only 1 in 3 had a mentor in high school.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Mental health is a predictor:</span> 1 in 4 college students report mental health concerns impacting academics at least 6 days/month.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Economic cost is massive:</span> Dropouts earn ~35% less income and are 2× more likely to be unemployed than degree holders.
                </p>
              </div>
            </div>
          </div>
        </CardItem>

        {/* Bottom Stats Row */}
        <div className="flex justify-between items-center gap-4">
          <CardItem translateZ={30} className="flex-1">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-orange-200/50 dark:border-orange-900/20 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">6-yr Dropout Rate</p>
              <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">29.2%</p>
            </div>
          </CardItem>

          <CardItem translateZ={30} className="flex-1">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-orange-200/50 dark:border-orange-900/20 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Students Affected</p>
              <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">43.1M</p>
            </div>
          </CardItem>

          <CardItem translateZ={30} className="flex-1">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-orange-200/50 dark:border-orange-900/20 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Income Loss</p>
              <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">~35%</p>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}