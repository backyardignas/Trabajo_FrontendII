import MainLayout from "../layout/LayoutPrueba";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div>
      <MainLayout>
        <Header 
          title="Página de enrollments" 
          description="Bienvenido al sistema de gestión de enrollments" 
        />
      </MainLayout>
    </div>
  );
}

export default Dashboard;