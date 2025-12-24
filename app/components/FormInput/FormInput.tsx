"use client";

import { useState } from "react";

export default function FormInput({ onAdd, notify }: any) {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewItem = () => {
    if (!qu || !an) {
      notify("من فضلك ادخل البيانات", "Error");
      return;
    }

    onAdd({
      id: Date.now(),
      question: qu,
      answer: an,
    });

    setQu("");
    setAn("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row w-full gap-3">
        <input
          type="text"
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          placeholder="ادخل السؤال ؟"
          className="bg-white px-3 py-2 w-full rounded-md shadow-lg"
        />

        <input
          type="text"
          value={an}
          onChange={(e) => setAn(e.target.value)}
          placeholder="ادخل الاجابة"
          className="bg-white px-3 py-2 w-full rounded-md shadow-lg"
        />

        <button
          onClick={addNewItem}
          className="bg-fuchsia-600 text-white px-4 py-2 rounded-md"
        >
          إضافة
        </button>
      </div>
    </div>
  );
}
