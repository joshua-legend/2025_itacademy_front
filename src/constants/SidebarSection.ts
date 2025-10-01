import { SidebarSectionProps } from "@/components/SidebarSection";

export const menuSections: SidebarSectionProps[] = [
  {
    title: "수업",
    items: [
      { href: "/search/class", label: "조회" },
      { href: "/register/class", label: "등록" },
      { href: "/delete/class", label: "삭제" },
    ],
  },
  {
    title: "선생님",
    items: [
      { href: "/search/teacher", label: "조회" },
      { href: "/register/teacher", label: "등록" },
      { href: "/delete/teacher", label: "삭제" },
    ],
  },
  {
    title: "학생",
    items: [
      { href: "/search/student", label: "조회" },
      { href: "/register/student", label: "등록" },
      { href: "/delete/student", label: "삭제" },
    ],
  },
];
