import  {Link, useNavigate}  from 'react-router-dom';
const Header = ({ searchKey, setSearchKey }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearchKey(''); // Clear the search input
    navigate('/'); 
  };

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">X Shop</Link>
            <Link className="nav-link" to="/">Products List</Link>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" 
            aria-label="Search" 
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
              />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

  </header>
  )
}
export default Header
