import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div style={{ pointerEvents: "none" }}></div>

      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
        <h1 className="ml-2">Menu</h1>
      </Button>

      <div className="flex w-full justify-end px-5 py-4"></div>
    </div>
  );
};

export default Navbar;
