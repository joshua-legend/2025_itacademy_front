"use client";
import SearchTable from "../FormCommon/SearchTable";
import { useEffect, useState } from "react";

const columns = [
  { key: "title", label: "수업명" },
  { key: "description", label: "설명" },
  { key: "teacherName", label: "선생님" },
  { key: "studentCount", label: "학생 수" },
];

export default function ClassSearchTable() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch("http://localhost:3001/curriculums");
      const data = await response.json();
      const formattedData = data.map((classItem: any) => ({
        title: classItem.title,
        description: classItem.description,
        teacherName: classItem.teacher.name,
        studentCount: classItem.enrollments.length,
      }));

      setClasses(formattedData);
    };
    fetchClasses();
  }, []);

  return <SearchTable columns={columns} data={classes} />;
}
