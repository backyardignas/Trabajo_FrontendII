import MainLayout from "../layout/LayoutPrueba";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div>
      <MainLayout>
        <Header 
          title="Página de Dashboard" 
          description="Bienvenido al sistema de gestión de dashboard" 
        />
      </MainLayout>
    </div>
  );
}

export default Dashboard;