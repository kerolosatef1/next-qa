"use client";

import { useState } from "react";

export default function QAList({ data = [], deleteOneItem }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-4 space-y-3 w-full">
      {data.length ? (
        data.map((item: any, index: number) => (
          <div
            key={item.id}
            className="border bg-white rounded-lg shadow"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center p-4 text-start"
            >
              <div className="font-semibold text-gray-800">
                {item.question}
              </div>

              <div
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </div>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-right text-sm text-gray-600">
                {item.answer}

                <button
                  onClick={() => deleteOneItem(item.id)}
                  className="bg-red-700 text-white px-4 py-2 rounded-md m-5 hover:bg-red-500"
                >
                  حذف
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <h2 className="bg-red-500 text-2xl p-4 text-center text-white">
          لا يوجد بيانات
        </h2>
      )}
    </div>
  );
}
