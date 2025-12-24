"use client";

import { useEffect, useState } from "react";
import QAList from "@/app/components/QAList/QaList";
import FormInput from "@/app/components/FormInput/FormInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("items") || "[]");
    setData(stored);
  }, []);

  const addItem = (item: any) => {
    const newData = [...data, item];
    setData(newData);
    localStorage.setItem("items", JSON.stringify(newData));
    notify("تمت الإضافة بنجاح", "Success");
  };

  const deleteOneItem = (id: number) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem("items", JSON.stringify(newData));
    notify("تم حذف السؤال", "Success");
  };

  const deleteAllItems = () => {
    setData([]);
    localStorage.removeItem("items");
    notify("تم حذف الكل", "Success");
  };

  const notify = (message: string, type: string) => {
    type === "Error" ? toast.error(message) : toast.success(message);
  };

  return (
    <div className="text-center min-h-screen w-full">
      <div className="container p-5">
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
          <div className="text-xl lg:w-1/2">أسئلة وأجوبة شائعة</div>
          <FormInput onAdd={addItem} notify={notify} />
        </div>

        <QAList data={data} deleteOneItem={deleteOneItem} />

        {data.length > 0 && (
          <button
            className="bg-red-700 text-white px-6 py-2 rounded-md mt-5 hover:bg-red-500"
            onClick={deleteAllItems}
          >
            مسح الكل
          </button>
        )}

        <ToastContainer />
      </div>
    </div>
  );
}
