function Header({ title, description, txtButton }) {
    
    return (
        <div className="flex justify-between items-center mb-8 p-6">
            <div>
                <h1 className="text-4xl font-bold text-slate-800">{title}</h1>
                <p className="text-black-300">{description}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {txtButton}
            </button>
        </div>
    );
}

export default Header;