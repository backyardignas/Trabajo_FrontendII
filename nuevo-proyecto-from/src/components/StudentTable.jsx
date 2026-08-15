function StudentTable({sudents, onEdit, onDelete,}) {

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
                        <td className="p-4"> 
                        {student.firt_name}
                        </td>
                        <td className="p-4"> 
                        {student.last_name}</td>
                        <td className="p-4"> 
                        {student.email}
                        </td>
                        <td className="p-4"> 
                        {student.firt_name}
                        </td>
                        <td className="p-4"> 
                        {student.phone_number}
                        </td>
                        <td>
                            <button ></button>
                        </td>
                        <td>
                            <button onClick={() => onEdit(student)} className="bg-blue-500 text-white p-2 rounded mr-2">Editar</button>
                            <button onClick={() => onEdit(student.student_id)} className="bg-red-500 text-white p-2 rounded">Eliminar</button>
                        </td>
                   </tr>
                ))}   
            </tbody>
        </table>
    )
}
export default StudentTable