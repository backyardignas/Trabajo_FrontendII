function EnrollmentTable({ enrollments }) {
  return (
    <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
      <thead className="bg-slate-100">
        <tr>
          <th className="text-left p-4">Estudiante</th>
          <th className="text-left p-4">Curso</th>
          <th className="text-left p-4">Fecha</th>
          <th className="text-left p-4">Estado</th>
        </tr>
      </thead>

      <tbody>
        {enrollments.map((enrollment) => (
          <tr key={enrollment.id} className="border-t">
            <td className="p-4">
              {enrollment.student
                ? `${enrollment.student.first_name} ${enrollment.student.last_name}`
                : enrollment.student_id}
            </td>
            <td className="p-4">{enrollment.course?.course_name ?? enrollment.course_id}</td>
            <td className="p-4">{enrollment.enrollment_date ?? "-"}</td>
            <td className="p-4">{enrollment.enrollment_status ?? "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EnrollmentTable;
