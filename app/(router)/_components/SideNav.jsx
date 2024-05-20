import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNav = () => {
  const menu = [
    {
      id: 1,
      icon: BookOpen,
      name: "All Courses",
    },
    {
      id: 2,
      icon: BadgeIcon,
      name: "Membership",
    },
    {
      id: 3,
      icon: GraduationCap,
      name: "Be an Instructor",
    },
  ];

  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/logo.svg" alt="logo" width={170} height={80} />
      <hr className="mt-7" />
      <div className="mt-5">
        {menu.map((item, index) => (
          <div
            key={item.id}
            className="group flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200"
          >
            <item.icon className="group-hover:animate-bounce" />
            {item.name}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
