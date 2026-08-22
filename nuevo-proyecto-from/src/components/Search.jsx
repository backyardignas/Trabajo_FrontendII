function Search({ searchTerm, onChange, placeholder }) {
  return (
    <div className="w-full my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        placeholder={placeholder || "Buscar..."}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

export default Search;