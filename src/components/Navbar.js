import { NavLink , useHistory} from "react-router-dom";


const Navbar = ({searchText,setSearchText,inputText,setInputText}) => {
  const history=useHistory();
  
  const updateInputText = (e) => {
    setInputText(e.target.value);
  }

  const searchButton = click => {
    click.preventDefault();
    history.push('/search');
    setSearchText(inputText);
    setInputText('');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Movie Browser
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                to="/"
                tabIndex="-1"
                aria-disabled="true">
                Coming soon
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputText}
              onChange={updateInputText}
            />
            <button className="btn btn-outline-success" type="submit" onClick={searchButton}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
