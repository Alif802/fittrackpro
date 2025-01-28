import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ThemeToggle } from "@/components/theme-toggle";

const mockWorkouts = [
  {
    id: 1,
    date: "2024-02-20",
    exercise: "Bench Press",
    sets: 3,
    reps: 10,
    weight: 60,
  },
  {
    id: 2,
    date: "2024-02-19",
    exercise: "Squats",
    sets: 4,
    reps: 8,
    weight: 80,
  },
  // Add more mock data as needed
];

const History = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Workout History</h1>
          <ThemeToggle />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Exercise</TableHead>
                <TableHead>Sets</TableHead>
                <TableHead>Reps</TableHead>
                <TableHead>Weight (kg)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockWorkouts.map((workout) => (
                <TableRow key={workout.id}>
                  <TableCell>{workout.date}</TableCell>
                  <TableCell>{workout.exercise}</TableCell>
                  <TableCell>{workout.sets}</TableCell>
                  <TableCell>{workout.reps}</TableCell>
                  <TableCell>{workout.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default History;