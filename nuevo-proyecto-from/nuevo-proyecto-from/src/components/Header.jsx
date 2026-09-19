function Header({
  title,
  description,
  txtButton
}) {
  return (
    <div className="w-full flex justify-between items-center p-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">{title}</h1>
        <p className="text-slate-500 mt-1">{description}</p>
      </div>
      <div>
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          {txtButton}
        </button>
      </div>
    </div>
  );
}

export default Header;