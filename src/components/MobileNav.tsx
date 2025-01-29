import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

export const MobileNav = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Log Workout", path: "/log-workout" },
    { label: "History", path: "/history" },
    { label: "Schedule", path: "/schedule" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.label}
            </Button>
          ))}
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};