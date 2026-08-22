function MenuNavegacion() {
  return (
    <nav>
      <ul className="flex flex-col gap-8 ml-2">
        <li>
          <a className="text-white hover:text-blue-500" href="/">
            Dashboard
          </a>
        </li>
        <li>
          <a className="text-white hover:text-blue-500" href="/courses">
            Cursos
          </a>
        </li>
        <li>
          <a className="text-white hover:text-blue-500" href="/students">
            Estudiantes
          </a>
        </li>
        <li>
          <a className="text-white hover:text-blue-500" href="/enrollments">
            Matriculas
          </a>
        </li>
        <li>
          <a className="text-white hover:text-blue-500" href="/prueba">
            Layout Prueba
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNavegacion;