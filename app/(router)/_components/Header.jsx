import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-2 border rounded-md p-2">
        <Search className="h-5 w-5" />
        <input type="search" placeholder="Search" className="outline-none" />
      </div>
      <div className="flex items-center gap-4">
        <BellDot />
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
