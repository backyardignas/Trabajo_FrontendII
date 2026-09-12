import { useEffect, useState } from "react";
import LayoutPrueba from "../layout/LayoutPrueba";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import { getStudents, addStudent } from "../Service/studentService";

const normalizeStudent = (row) => ({
  ...row,
  student_id: row.student_id ?? row.id,
});

function Students() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStudents()
      .then((data) => setStudents(data.map(normalizeStudent)))
      .catch((err) => setError(err.message));
  }, []);

  const handleAdd = async (newStudentData) => {
    try {
      const createdStudent = await addStudent(newStudentData);
      setStudents((prev) => [...prev, normalizeStudent(createdStudent)]);
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = (studentId) => {
    setStudents((prev) => prev.filter((student) => student.student_id !== studentId));
  };

  return (
    <LayoutPrueba titulo="Estudiantes">
      <div className="flex justify-between items-center mb-4">
        <p className="text-slate-600">Lista de estudiantes registrados</p>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Agregar Estudiante
        </button>
      </div>
      {error && (
        <p className="text-red-600 bg-red-50 border border-red-200 rounded p-3 mb-4">
          {error}
        </p>
      )}
      {showForm && (
        <StudentForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
      )}
      <StudentTable students={students} onDelete={handleDelete} />
    </LayoutPrueba>
  );
}

export default Students;