"use client";

import { useState } from "react";
import FormField from "../FormCommon/FormField";
import FormButton from "../FormCommon/FormButton";

const gradeOptions = [
  { value: "1", label: "1학년" },
  { value: "2", label: "2학년" },
  { value: "3", label: "3학년" },
  { value: "4", label: "4학년" },
  { value: "5", label: "5학년" },
  { value: "6", label: "6학년" },
];

export default function StudentRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    phone: "",
    parentPhone: "",
    parentName: "",
    address: "",
    emergencyContact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("학생 등록:", formData);
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
        <FormField label="학생 이름" name="name" value={formData.name} onChange={handleChange} required placeholder="학생 이름을 입력하세요" />
        <FormField label="학년" name="grade" type="select" value={formData.grade} onChange={handleChange} required options={gradeOptions} placeholder="학년을 선택하세요" />

        <FormField label="학생 전화번호" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="010-1234-5678" />

        <FormField label="부모님 이름" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="부모님 이름을 입력하세요" />

        <FormField label="부모님 전화번호" name="parentPhone" type="tel" value={formData.parentPhone} onChange={handleChange} required placeholder="010-1234-5678" />

        <FormField label="주소" name="address" value={formData.address} onChange={handleChange} placeholder="주소를 입력하세요" />

        <FormField label="비상연락처" name="emergencyContact" type="tel" value={formData.emergencyContact} onChange={handleChange} placeholder="010-1234-5678" />

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
