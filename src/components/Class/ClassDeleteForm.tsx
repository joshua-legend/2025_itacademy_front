"use client";

import { useState } from "react";
import FormField from "../FormCommon/FormField";
import DeleteConfirm from "../FormCommon/DeleteConfirm";

const mockClasses = [
  { id: "1", name: "수학 기초반", teacher: "김선생님", students: 15 },
  { id: "2", name: "영어 중급반", teacher: "이선생님", students: 12 },
  { id: "3", name: "과학 고급반", teacher: "박선생님", students: 8 },
];

const classOptions = mockClasses.map((cls) => ({
  value: cls.id,
  label: `${cls.name} - ${cls.teacher} (학생 ${cls.students}명)`,
}));

export default function ClassDeleteForm() {
  const [selectedClass, setSelectedClass] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    if (selectedClass) {
      console.log("수업 삭제:", selectedClass);
      setSelectedClass("");
      setShowConfirm(false);
    }
  };

  const handleConfirm = () => {
    if (confirm("정말로 이 수업을 삭제하시겠습니까?")) {
      handleDelete();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <FormField
          label="삭제할 수업 선택"
          name="selectedClass"
          type="select"
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.target.value);
            setShowConfirm(!!e.target.value);
          }}
          options={classOptions}
          placeholder="수업을 선택하세요"
        />
      </div>

      <DeleteConfirm
        isVisible={showConfirm}
        title="삭제 확인"
        message="선택한 수업을 삭제하면 관련된 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다."
        onConfirm={handleConfirm}
        onCancel={() => {
          setSelectedClass("");
          setShowConfirm(false);
        }}
      />
    </div>
  );
}
