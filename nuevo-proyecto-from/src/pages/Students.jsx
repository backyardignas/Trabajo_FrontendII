import Search from "../components/Search";
import StudentTable from "../components/table/StudentTable";
import StudentForm from "../components/forms/StudentForm";
import ConfirmDialog from "../components/common/ConfirmDialog";
import MainLayout from "../layout/MainLayout";
import Header from "../components/Header";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../Service/studentService.js";
import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [deletingStudent, setDeletingStudent] = useState(null);
  const [error, setError] = useState(null);

  const listStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getStudents()
      .then(setStudents)
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
      });
  }, []);

  const handleOpenCreate = () => {
    setEditingStudent(null);
    setFormOpen(true);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setEditingStudent(null);
  };

  const handleSubmit = async (studentData) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent.student_id, studentData);
      } else {
        await addStudent(studentData);
      }
      setError(null);
      await listStudents();
      handleCloseForm();
    } catch (err) {
      console.error("Error saving student:", err);
      setError(err.message);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteStudent(deletingStudent.student_id);
      setError(null);
      await listStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
      setError(err.message);
    } finally {
      setDeletingStudent(null);
    }
  };

  const filteredStudents = students.filter((student) => {
    const term = search.toLowerCase();
    return (
      String(student.student_id).includes(term) ||
      student.first_name?.toLowerCase().includes(term) ||
      student.last_name?.toLowerCase().includes(term) ||
      student.email?.toLowerCase().includes(term)
    );
  });

  return (
    <MainLayout>
      <Header
        title="Estudiantes"
        description="Lista de estudiantes registrados"
        txtButton="Agregar Estudiante"
        onButtonClick={handleOpenCreate}
      />
      <div className="px-6 pb-6">
        {error && (
          <p className="text-red-600 bg-red-50 border border-red-200 rounded p-3 mb-4">
            {error}
          </p>
        )}
        <Search
          searchTerm={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar estudiante..."
        />
        <StudentTable
          students={filteredStudents}
          onEdit={handleEdit}
          onDelete={setDeletingStudent}
        />
      </div>
      <StudentForm
        open={formOpen}
        initialData={editingStudent}
        onSubmit={handleSubmit}
        onCancel={handleCloseForm}
      />
      <ConfirmDialog
        open={!!deletingStudent}
        title="Eliminar estudiante"
        message={`¿Seguro que deseas eliminar a ${deletingStudent?.first_name ?? ""} ${deletingStudent?.last_name ?? ""}?`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeletingStudent(null)}
      />
    </MainLayout>
  );
}

export default Students;
