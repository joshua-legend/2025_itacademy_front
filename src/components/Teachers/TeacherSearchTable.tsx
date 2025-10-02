"use client";
import SearchTable from "../FormCommon/SearchTable";
import { useEffect, useState } from "react";
const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "이름" },
  { key: "phone", label: "전화번호" },
];

export default function TeacherSearchTable() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await fetch("https://2025lastnestjs-production.up.railway.app/teachers");
      const data = await response.json();
      setTeachers(data);
    };
    fetchTeachers();
  }, []);

  return <SearchTable columns={columns} data={teachers} />;
}
