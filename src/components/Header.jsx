function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <h1>Клуб любителів астрономії</h1>
      <p>Реєстрація на спостереження за космосом</p>
      <div className="search-container">
        <input
          type="search"  
          placeholder="Пошук за назвою події..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </header>
  );
}

export default Header;
