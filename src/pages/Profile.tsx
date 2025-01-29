import { BackButton } from "@/components/BackButton";
import { ThemeToggle } from "@/components/theme-toggle";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <BackButton />
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="bg-card rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          <p className="text-gray-700">Name: John Doe</p>
          <p className="text-gray-700">Email: johndoe@example.com</p>
          <p className="text-gray-700">Joined: January 1, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
