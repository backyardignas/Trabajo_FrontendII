function CourseTable({ courses }) {
  return (
    <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
      <thead className="bg-slate-100">
        <tr>
          <th className="text-left p-4">Código</th>
          <th className="text-left p-4">Nombre</th>
          <th className="text-left p-4">Descripción</th>
          <th className="text-left p-4">Cupo máximo</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((course) => (
          <tr key={course.course_id} className="border-t">
            <td className="p-4">{course.course_code}</td>
            <td className="p-4">{course.course_name}</td>
            <td className="p-4">{course.course_description}</td>
            <td className="p-4">{course.course_max_capacity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseTable;
