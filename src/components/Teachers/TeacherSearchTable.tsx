import SearchTable from "../FormCommon/SearchTable";

const columns = [
  { key: "name", label: "이름" },
  { key: "phone", label: "전화번호" },
  { key: "email", label: "이메일" },
  { key: "subject", label: "담당 과목" },
  { key: "status", label: "상태" },
];

const mockData = [
  {
    name: "김선생님",
    phone: "010-1234-5678",
    email: "kim@example.com",
    subject: "수학",
    status: "재직중",
  },
  {
    name: "이선생님",
    phone: "010-2345-6789",
    email: "lee@example.com",
    subject: "영어",
    status: "재직중",
  },
];

export default function TeacherSearchTable() {
  const handleSearch = (query: string) => {
    console.log("검색어:", query);
    // 여기에 실제 검색 로직 추가
  };

  return <SearchTable columns={columns} data={mockData} />;
}
