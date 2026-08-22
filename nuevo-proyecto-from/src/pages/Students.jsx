import { useState } from "react";
import LayoutPrueba from "../layout/LayoutPrueba";
import StudentTable from "../components/StudentTable";

const initialStudents = [
  {
    student_id: 1,
    first_name: "Juan",
    last_name: "Pérez",
    email: "juan.perez@cesde.net",
    phone_number: "3001234567",
  },
  {
    student_id: 2,
    first_name: "Maria",
    last_name: "Gómez",
    email: "maria.gomez@cesde.net",
    phone_number: "3007654321",
  },
];

function Students() {
  const [students, setStudents] = useState(initialStudents);

  const handleAdd = () => {
    const newStudent = {
      student_id: Date.now(),
      first_name: "Nuevo",
      last_name: "Estudiante",
      email: `nuevo.estudiante${students.length + 1}@cesde.net`,
      phone_number: "3000000000",
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleDelete = (studentId) => {
    setStudents((prev) => prev.filter((student) => student.student_id !== studentId));
  };

  return (
    <LayoutPrueba titulo="Estudiantes">
      <div className="flex justify-between items-center mb-4">
        <p className="text-slate-600">Lista de estudiantes registrados</p>
        <button
          onClick={handleAdd}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Agregar Estudiante
        </button>
      </div>
      <StudentTable students={students} onDelete={handleDelete} />
    </LayoutPrueba>
  );
}

export default Students;