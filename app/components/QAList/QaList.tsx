"use client";

import { useState } from "react";

export default function QAList({
  data = [],
  deleteOneItem,
  onEdit,
  deleteAllItems
}: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-4 space-y-3 w-full">
      {data.length ? (
        data.map((item: any, index: number) => (
          <div key={item.id} className="border bg-white rounded-lg shadow">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-4 text-start"
            >
              <span className="font-semibold">{item.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-right">
                <p className="mb-3">{item.answer}</p>

                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    تعديل
                  </button>

                  <button
                    onClick={() => deleteOneItem(item.id)}
                    className="bg-red-700 text-white px-4 py-2 rounded"
                  >
                    حذف
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <h2 className="bg-red-500 text-white p-4 text-center">
          لا يوجد بيانات
        </h2>
      )}
    </div>
  );
}
