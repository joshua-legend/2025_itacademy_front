interface DeleteConfirmProps {
  isVisible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

export default function DeleteConfirm({ isVisible, title, message, onConfirm, onCancel, confirmText = "삭제", cancelText = "취소" }: DeleteConfirmProps) {
  if (!isVisible) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
      <h3 className="text-lg font-medium text-red-800 mb-2">⚠️ {title}</h3>
      <p className="text-red-700 mb-4">{message}</p>
      <div className="flex gap-4">
        <button onClick={onConfirm} className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          {confirmText}
        </button>
        <button onClick={onCancel} className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          {cancelText}
        </button>
      </div>
    </div>
  );
}
