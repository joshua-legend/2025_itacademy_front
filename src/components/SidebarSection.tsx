"use client";

import Link from "next/link";
import { useState } from "react";

export type SidebarSectionProps = {
  title: string;
  items: {
    href: string;
    label: string;
  }[];
};

export default function SidebarSection({ title, items }: SidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <button className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsExpanded(!isExpanded)}>
        <span>{title}</span>
        <span className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isExpanded && (
        <div className="ml-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
