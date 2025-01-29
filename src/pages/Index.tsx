import { Activity, Dumbbell, Target, Trophy } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { ActivityChart } from "@/components/ActivityChart";
import { QuickActions } from "@/components/QuickActions";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/MobileNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <MobileNav />
            <div>
              <h1 className="text-3xl font-bold">Fitness Dashboard</h1>
              <p className="text-muted-foreground">Track your progress and achieve your goals</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <QuickActions />
            <ThemeToggle />
          </div>
        </div>

        {/* Quick Actions for Mobile */}
        <div className="md:hidden">
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