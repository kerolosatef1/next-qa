"use client";

import { useEffect, useState } from "react";

export default function Edit({
  open,
  item,
  onClose,
  onSave,
}: any) {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  useEffect(() => {
    if (item) {
      setQu(item.question);
      setAn(item.answer);
    }
  }, [item]);

  if (!open) return null;

  const handleSave = () => {
    if (!qu || !an) return;

    onSave({
      ...item,
      question: qu,
      answer: an,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">تعديل السؤال</h2>

        <input
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          placeholder="السؤال"
        />

        <input
          value={an}
          onChange={(e) => setAn(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          placeholder="الإجابة"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 cursor-pointer py-2 rounded bg-gray-300"
          >
            إلغاء
          </button>

          <button
            onClick={handleSave}
            className="px-4 cursor-pointer py-2 rounded bg-fuchsia-600 text-white"
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
