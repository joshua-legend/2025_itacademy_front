"use client";

import { menuSections } from "@/constants/SidebarSection";
import SidebarSection from "./SidebarSection";

export default function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-200">
      <div className="h-full p-4 flex flex-col gap-4">
        {menuSections.map((section, index) => (
          <SidebarSection key={index} title={section.title} items={section.items} />
        ))}
      </div>
    </div>
  );
}
