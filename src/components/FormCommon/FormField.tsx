interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "number" | "password" | "textarea" | "select";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
  min?: number;
  rows?: number;
  options?: { value: string; label: string }[];
  className?: string;
}

export default function FormField({ label, name, type = "text", value, onChange, required = false, placeholder, min, rows, options, className = "" }: FormFieldProps) {
  const baseInputClass = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const renderInput = () => {
    if (type === "textarea") {
      return <textarea name={name} value={value} onChange={onChange} required={required} rows={rows || 4} className={`${baseInputClass} ${className}`} placeholder={placeholder} />;
    }

    if (type === "select" && options) {
      return (
        <select name={name} value={value} onChange={onChange} required={required} className={`${baseInputClass} ${className}`}>
          <option value="">{placeholder || "선택하세요"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return <input type={type} name={name} value={value} onChange={onChange} required={required} min={min} className={`${baseInputClass} ${className}`} placeholder={placeholder} />;
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && "*"}
      </label>
      {renderInput()}
    </div>
  );
}
