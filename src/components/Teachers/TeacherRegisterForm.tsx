"use client";

import { useState } from "react";
import FormField from "../FormCommon/FormField";
import FormButton from "../FormCommon/FormButton";

const subjectOptions = [
  { value: "math", label: "수학" },
  { value: "english", label: "영어" },
  { value: "science", label: "과학" },
  { value: "korean", label: "국어" },
  { value: "social", label: "사회" },
];

export default function TeacherRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    experience: "",
    introduction: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("선생님 등록:", formData);
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
        <FormField label="이름" name="name" value={formData.name} onChange={handleChange} required placeholder="이름을 입력하세요" />

        <FormField label="전화번호" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="010-1234-5678" />

        <FormField label="이메일" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />

        <FormField label="담당 과목" name="subject" type="select" value={formData.subject} onChange={handleChange} required options={subjectOptions} placeholder="과목을 선택하세요" />

        <FormField label="경력 (년)" name="experience" type="number" value={formData.experience} onChange={handleChange} min={0} placeholder="경력을 입력하세요" />

        <FormField label="자기소개" name="introduction" type="textarea" value={formData.introduction} onChange={handleChange} placeholder="자기소개를 입력하세요" />

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
