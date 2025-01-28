import { Card } from "@/components/ui/card";

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

export const StatsCard = ({ label, value, icon }: StatsCardProps) => {
  return (
    <Card className="stat-card">
      <div className="flex items-center justify-between">
        <div className="text-primary/80">{icon}</div>
        <div className="text-right">
          <div className="stat-value">{value}</div>
          <div className="stat-label">{label}</div>
        </div>
      </div>
    </Card>
  );
};