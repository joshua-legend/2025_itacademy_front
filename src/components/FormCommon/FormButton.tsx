interface FormButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function FormButton({ type = "button", variant = "primary", onClick, disabled = false, children, className = "" }: FormButtonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500";
      case "secondary":
        return "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500";
      case "danger":
        return "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 disabled:bg-gray-300 disabled:cursor-not-allowed";
      default:
        return "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500";
    }
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`px-6 py-2 rounded-md focus:outline-none focus:ring-2 ${getVariantClass()} ${className}`}>
      {children}
    </button>
  );
}
