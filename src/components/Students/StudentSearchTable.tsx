import SearchTable from "../FormCommon/SearchTable";

const columns = [
  { key: "name", label: "이름" },
  { key: "grade", label: "학년" },
  { key: "phone", label: "전화번호" },
  { key: "parentPhone", label: "부모님 연락처" },
  { key: "class", label: "수강 수업" },
];

const mockData = [
  {
    name: "김학생",
    grade: "3학년",
    phone: "010-1111-2222",
    parentPhone: "010-3333-4444",
    class: "수학 기초반",
    status: "수강중",
  },
  {
    name: "이학생",
    grade: "2학년",
    phone: "010-5555-6666",
    parentPhone: "010-7777-8888",
    class: "영어 중급반",
    status: "수강중",
  },
];

export default function StudentSearchTable() {
  const handleSearch = (query: string) => {
    console.log("검색어:", query);
    // 여기에 실제 검색 로직 추가
  };

  return <SearchTable columns={columns} data={mockData} />;
}
