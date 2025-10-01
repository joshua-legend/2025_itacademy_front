"use client";

import { useState } from "react";
import FormField from "../FormCommon/FormField";
import FormButton from "../FormCommon/FormButton";

export default function ClassRegisterForm() {
  const [formData, setFormData] = useState({
    className: "",
    teacher: "",
    schedule: "",
    maxStudents: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("수업 등록:", formData);
    // 여기에 실제 등록 로직 추가
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField label="수업명" name="className" value={formData.className} onChange={handleChange} required placeholder="수업명을 입력하세요" />

        <FormField label="담당 선생님" name="teacher" value={formData.teacher} onChange={handleChange} required placeholder="선생님 이름을 입력하세요" />

        <FormField label="수업 시간" name="schedule" value={formData.schedule} onChange={handleChange} required placeholder="예: 월,수,금 14:00-15:00" />

        <FormField label="최대 학생 수" name="maxStudents" type="number" value={formData.maxStudents} onChange={handleChange} required min={1} placeholder="최대 학생 수를 입력하세요" />

        <FormField label="수업 설명" name="description" type="textarea" value={formData.description} onChange={handleChange} placeholder="수업에 대한 설명을 입력하세요" />

        <div className="flex gap-4">
          <FormButton type="submit" variant="primary">
            등록
          </FormButton>
          <FormButton type="button" variant="secondary">
            취소
          </FormButton>
        </div>
      </form>
    </div>
  );
}
