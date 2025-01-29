import { BackButton } from "@/components/BackButton";
import { ThemeToggle } from "@/components/theme-toggle";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <BackButton />
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="text-3xl font-bold">Workout Schedule</h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-lg border p-4 bg-card">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          <div className="w-full max-w-md p-4 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-4">
              {date ? date.toLocaleDateString() : "Select a date"}
            </h2>
            <p className="text-muted-foreground">
              No workouts scheduled for this day. Click on a date to schedule a workout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
