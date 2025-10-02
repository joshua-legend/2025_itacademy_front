interface TableColumn {
  key: string;
  label: string;
  className?: string;
}

interface SearchTableProps {
  columns: TableColumn[];
  data: Record<string, unknown>[];
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchTable({ columns, data }: SearchTableProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white divide-y divide-gray-200">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.className || ""}`}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {String(row[column.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
