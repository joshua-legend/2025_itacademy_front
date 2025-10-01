const Search = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <select className="w-64 p-2 border border-gray-300 rounded shadow-sm">
          <option value="">전체</option>
          <option value="name">이름</option>
          <option value="class">수업</option>
          <option value="teacher">강사</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left">이름</th>
              <th className="px-6 py-3 border-b text-left">수업</th>
              <th className="px-6 py-3 border-b text-left">강사</th>
              <th className="px-6 py-3 border-b text-left">등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">홍길동</td>
              <td className="px-6 py-4 border-b">수학</td>
              <td className="px-6 py-4 border-b">김선생</td>
              <td className="px-6 py-4 border-b">2024-01-15</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">이영희</td>
              <td className="px-6 py-4 border-b">영어</td>
              <td className="px-6 py-4 border-b">박선생</td>
              <td className="px-6 py-4 border-b">2024-01-14</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
