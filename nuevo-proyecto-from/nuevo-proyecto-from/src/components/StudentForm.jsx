import { useState } from "react";

function StudentForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-3">Agregar Estudiante</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="first_name"
            placeholder="Nombre"
            value={formData.first_name}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Apellido"
            value={formData.last_name}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Celular"
            value={formData.phone_number}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Agregar Estudiante
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
