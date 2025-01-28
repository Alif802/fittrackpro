import { Button } from "@/components/ui/button";
import { Plus, History, Calendar, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 flex-wrap">
      <Button 
        className="flex items-center gap-2"
        onClick={() => navigate("/log-workout")}
      >
        <Plus size={18} />
        Log Workout
      </Button>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={() => navigate("/history")}
      >
        <History size={18} />
        History
      </Button>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={() => navigate("/schedule")}
      >
        <Calendar size={18} />
        Schedule
      </Button>
      <Button 
        variant="secondary" 
        className="flex items-center gap-2"
        onClick={() => navigate("/login")}
      >
        <LogIn size={18} />
        Login / Sign Up
      </Button>
    </div>
  );
};