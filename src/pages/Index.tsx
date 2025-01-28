import { Activity, Dumbbell, Target, Trophy } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { ActivityChart } from "@/components/ActivityChart";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Fitness Dashboard</h1>
            <p className="text-gray-500">Track your progress and achieve your goals</p>
          </div>
          <QuickActions />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            label="Active Minutes"
            value="355"
            icon={<Activity size={24} />}
          />
          <StatsCard
            label="Workouts"
            value="12"
            icon={<Dumbbell size={24} />}
          />
          <StatsCard
            label="Goals Met"
            value="8"
            icon={<Target size={24} />}
          />
          <StatsCard
            label="Achievements"
            value="5"
            icon={<Trophy size={24} />}
          />
        </div>

        {/* Activity Chart */}
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
          <ActivityChart />
        </div>
      </div>
    </div>
  );
};

export default Index;