function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
      <thead className="bg-slate-100">
        <tr>
          <th className="text-left p-4">Identificación</th>
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
            <td className="p-4">{student.student_id}</td>
            <td className="p-4">{student.first_name}</td>
            <td className="p-4">{student.last_name}</td>
            <td className="p-4">{student.email}</td>
            <td className="p-4">{student.phone_number}</td>
            <td className="p-4 text-center flex gap-2 justify-center">
              <button
                onClick={() => onEdit(student)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(student)}
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
