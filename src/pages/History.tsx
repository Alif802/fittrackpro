import { BackButton } from "@/components/BackButton";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const History = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const workoutHistory = [
    {
      date: "2024-01-15",
      workout: "Upper Body",
      duration: "45 min",
      exercises: ["Bench Press", "Pull-ups", "Shoulder Press"],
    },
    {
      date: "2024-01-13",
      workout: "Lower Body",
      duration: "50 min",
      exercises: ["Squats", "Deadlifts", "Lunges"],
    },
    {
      date: "2024-01-10",
      workout: "Full Body",
      duration: "60 min",
      exercises: ["Push-ups", "Rows", "Leg Press"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <BackButton />
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="text-3xl font-bold mb-6">Workout History</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workoutHistory.map((workout, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{workout.workout}</h3>
                        <p className="text-sm text-muted-foreground">
                          {workout.date} • {workout.duration}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Details
                      </Button>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {workout.exercises.map((exercise, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {exercise}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;