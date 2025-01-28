import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Workout logged:", workout);
    // Here you would typically save to a backend
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Log Workout</h1>
          <ThemeToggle />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="exercise">Exercise Name</Label>
            <Input
              id="exercise"
              value={workout.exercise}
              onChange={(e) => setWorkout({ ...workout, exercise: e.target.value })}
              placeholder="e.g., Bench Press"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sets">Sets</Label>
              <Input
                id="sets"
                type="number"
                value={workout.sets}
                onChange={(e) => setWorkout({ ...workout, sets: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reps">Reps</Label>
              <Input
                id="reps"
                type="number"
                value={workout.reps}
                onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={workout.weight}
                onChange={(e) => setWorkout({ ...workout, weight: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Input
              id="notes"
              value={workout.notes}
              onChange={(e) => setWorkout({ ...workout, notes: e.target.value })}
              placeholder="Any additional notes..."
            />
          </div>
          
          <Button type="submit" className="w-full">
            Log Workout
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LogWorkout;