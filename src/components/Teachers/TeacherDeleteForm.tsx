"use client";

import { useState } from "react";
import FormField from "../FormCommon/FormField";
import DeleteConfirm from "../FormCommon/DeleteConfirm";

const mockTeachers = [
  { id: "1", name: "김선생님", subject: "수학", classes: 3 },
  { id: "2", name: "이선생님", subject: "영어", classes: 2 },
  { id: "3", name: "박선생님", subject: "과학", classes: 1 },
];

const teacherOptions = mockTeachers.map((teacher) => ({
  value: teacher.id,
  label: `${teacher.name} - ${teacher.subject} (담당 수업 ${teacher.classes}개)`,
}));

export default function TeacherDeleteForm() {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    if (selectedTeacher) {
      console.log("선생님 삭제:", selectedTeacher);
      // 여기에 실제 삭제 로직 추가
      setSelectedTeacher("");
      setShowConfirm(false);
    }
  };

  const handleConfirm = () => {
    if (confirm("정말로 이 선생님을 삭제하시겠습니까?")) {
      handleDelete();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <FormField
          label="삭제할 선생님 선택"
          name="selectedTeacher"
          type="select"
          value={selectedTeacher}
          onChange={(e) => {
            setSelectedTeacher(e.target.value);
            setShowConfirm(!!e.target.value);
          }}
          options={teacherOptions}
          placeholder="선생님을 선택하세요"
        />
      </div>

      <DeleteConfirm
        isVisible={showConfirm}
        title="삭제 확인"
        message="선택한 선생님을 삭제하면 관련된 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다."
        onConfirm={handleConfirm}
        onCancel={() => {
          setSelectedTeacher("");
          setShowConfirm(false);
        }}
      />
    </div>
  );
}
