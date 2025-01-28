import { Button } from "@/components/ui/button";
import { Plus, History, Calendar } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button className="flex items-center gap-2">
        <Plus size={18} />
        Log Workout
      </Button>
      <Button variant="outline" className="flex items-center gap-2">
        <History size={18} />
        History
      </Button>
      <Button variant="outline" className="flex items-center gap-2">
        <Calendar size={18} />
        Schedule
      </Button>
    </div>
  );
};