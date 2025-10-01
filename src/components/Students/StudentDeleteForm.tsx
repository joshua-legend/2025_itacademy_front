"use client";

import { useState } from "react";
import FormField from "../FormCommon/FormField";
import DeleteConfirm from "../FormCommon/DeleteConfirm";

const mockStudents = [
  { id: "1", name: "김학생", grade: "3학년", class: "수학 기초반" },
  { id: "2", name: "이학생", grade: "2학년", class: "영어 중급반" },
  { id: "3", name: "박학생", grade: "4학년", class: "과학 고급반" },
];

const studentOptions = mockStudents.map((student) => ({
  value: student.id,
  label: `${student.name} - ${student.grade} (${student.class})`,
}));

export default function StudentDeleteForm() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    if (selectedStudent) {
      console.log("학생 삭제:", selectedStudent);
      // 여기에 실제 삭제 로직 추가
      setSelectedStudent("");
      setShowConfirm(false);
    }
  };

  const handleConfirm = () => {
    if (confirm("정말로 이 학생을 삭제하시겠습니까?")) {
      handleDelete();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <FormField
          label="삭제할 학생 선택"
          name="selectedStudent"
          type="select"
          value={selectedStudent}
          onChange={(e) => {
            setSelectedStudent(e.target.value);
            setShowConfirm(!!e.target.value);
          }}
          options={studentOptions}
          placeholder="학생을 선택하세요"
        />
      </div>

      <DeleteConfirm
        isVisible={showConfirm}
        title="삭제 확인"
        message="선택한 학생을 삭제하면 관련된 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다."
        onConfirm={handleConfirm}
        onCancel={() => {
          setSelectedStudent("");
          setShowConfirm(false);
        }}
      />
    </div>
  );
}
