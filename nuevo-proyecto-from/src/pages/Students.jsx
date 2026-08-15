import Footer from '../components/Footer'
import Nav from '../components/Nav'
import React from '../components/Nav'
import Header from '../components/Header';

function Students() {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Nav />
                <Header
                    title="Estudiantes"
                    description="Lista de estudiantes registrados"
                    txtButton="Agregar Estudiante"
                />
            </header>
            <main className="flex-1 p-4">
            </main>
        <Footer classname="mt-4" >
                <Footer />
        </Footer>
        </div>
    );
}

export default Students