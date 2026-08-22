import Encabezado from "../components/Encabezado";
import Sidebar from "../components/Sidebar";

function LayoutPrueba({ titulo, children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-slate-200 flex-1">
        <div className="flex flex-col min-h-screen">
          <div>
            <Encabezado titulo={titulo} />
          </div>
          <div className="flex-1 p-4">
            {children}
          </div>
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
            <p>copyright © 2026. Todos los derechos reservados.</p>
            <p>Diseñado por: Santiago Arango</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutPrueba;