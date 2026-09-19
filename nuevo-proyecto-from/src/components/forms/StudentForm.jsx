import { useState } from "react";

const emptyForm = {
  student_id: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
};

function StudentFormBody({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(
    initialData ? { ...emptyForm, ...initialData } : emptyForm
  );
  const isEditing = Boolean(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
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
        <h2 className="text-lg font-semibold mb-3">
          {isEditing ? "Editar Estudiante" : "Agregar Estudiante"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="number"
            name="student_id"
            placeholder="Identificación"
            value={form.student_id}
            onChange={handleChange}
            className="border rounded px-3 py-2 disabled:bg-slate-100 disabled:text-slate-500"
            disabled={isEditing}
            required
          />
          <input
            type="text"
            name="first_name"
            placeholder="Nombre"
            value={form.first_name}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Apellido"
            value={form.last_name}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Celular"
            value={form.phone_number}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              {isEditing ? "Guardar Cambios" : "Agregar Estudiante"}
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

function StudentForm({ open, initialData, onSubmit, onCancel }) {
  if (!open) return null;

  return (
    <StudentFormBody
      key={initialData?.student_id ?? "new"}
      initialData={initialData}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  );
}

export default StudentForm;
