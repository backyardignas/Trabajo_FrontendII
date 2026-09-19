function StudentTable({ students, onDelete }) {
  return (
    <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
      <thead className="bg-slate-100">
        <tr>
          <th className="text-left p-4">Nombre</th>
          <th className="text-left p-4">Apellido</th>
          <th className="text-left p-4">Correo</th>
          <th className="text-left p-4">Celular</th>
          <th className="text-center p-4">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.student_id} className="border-t">
            <td className="p-4">{student.first_name}</td>
            <td className="p-4">{student.last_name}</td>
            <td className="p-4">{student.email}</td>
            <td className="p-4">{student.phone_number}</td>
            <td className="p-4 text-center">
              <button
                onClick={() => onDelete(student.student_id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;