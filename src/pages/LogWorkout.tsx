import { BackButton } from "@/components/BackButton";
import { ThemeToggle } from "@/components/theme-toggle";

const LogWorkout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <BackButton />
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="text-3xl font-bold mb-6">Log Workout</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="workout-type" className="block text-sm font-medium text-gray-700">Workout Type</label>
            <input id="workout-type" type="text" placeholder="Enter workout type" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
            <input id="duration" type="number" placeholder="Enter duration" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea id="notes" placeholder="Enter any notes" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" rows={4} />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Log Workout</button>
        </form>
      </div>
    </div>
  );
};

export default LogWorkout;
