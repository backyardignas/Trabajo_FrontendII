import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Students() {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Nav />
            </header>
            <main className="flex-1 p-4">
                <h1>Students list</h1>
            </main>
        <Footer classname="mt-4" >
                <Footer />
        </Footer>
        </div>
    );
}

export default Students