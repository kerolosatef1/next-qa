"use client";
import { useEffect, useState } from "react";
import QAList from "@/app/components/QAList/QaList";
import FormInput from "@/app/components/FormInput/FormInput";
import Edit from "@/app/components/Edit/Edit";
import { ToastContainer, toast } from "react-toastify";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [editItem, setEditItem] = useState<any>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("items") || "[]");
    setData(stored);
  }, []);

  const sync = (newData: any[]) => {
    setData(newData);
    localStorage.setItem("items", JSON.stringify(newData));
  };

  const addItem = (item: any) => {
    const newData = [...data, item];
    sync(newData);
    toast.success("تمت الإضافة");
  };

  const deleteOneItem = (id: number) => {
    sync(data.filter((i) => i.id !== id));
    toast.success("تم الحذف");
  };

  const saveEdit = (updatedItem: any) => {
    const newData = data.map((i) =>
      i.id === updatedItem.id ? updatedItem : i
    );
    sync(newData);
    setEditItem(null);
    toast.success("تم التعديل");
  };

  return (
    <>
      <FormInput onAdd={addItem} notify={toast} />

      <QAList
        data={data}
        deleteOneItem={deleteOneItem}
        onEdit={setEditItem}
      />

      <Edit
        open={!!editItem}
        item={editItem}
        onClose={() => setEditItem(null)}
        onSave={saveEdit}
      />
      
      <ToastContainer />
    </>
  );
}
