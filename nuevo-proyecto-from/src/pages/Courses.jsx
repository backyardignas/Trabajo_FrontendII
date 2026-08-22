import MainLayout from "../layout/LayoutPrueba";
import Header from "../components/Header";

function Courses() {
  return (
    <div>
      <MainLayout>
        <Header 
          title="Página de Cursos" 
          description="Bienvenido al sistema de gestión de cursos" 
        />
      </MainLayout>
    </div>
  );
}

export default Courses;