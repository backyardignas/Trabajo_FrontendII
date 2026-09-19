import { useState } from "react";

export function useFormState(initialData) {
  const [formData, setFormData] = useState(initialData);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return { formData, setFormData, handleChange };
}