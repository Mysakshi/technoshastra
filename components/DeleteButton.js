"use client";

import { Trash2, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function DeleteButton({ itemName = "item" }) {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className="text-slate-500 hover:text-red-600 transition-colors disabled:opacity-50" 
      onClick={(e) => {
        if (!confirm(`Are you sure you want to delete this ${itemName}?`)) e.preventDefault();
      }}
    >
      {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Trash2 className="h-5 w-5" />}
    </button>
  );
}
