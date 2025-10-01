const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 border-l border-gray-200">
      <div className="h-full p-4">{children}</div>
    </div>
  );
};

export default Contents;
