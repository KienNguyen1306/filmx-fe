import { Link } from "react-router-dom";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setProductType } from "../../store/movie/action";
import { useDispatch } from "react-redux";
function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search?q=${value}`);
  }
  function handleOnchange(e) {
    setValue(e.target.value);
  }
  function handleSetType() {
    dispatch(setProductType("all", 0, "Phim mới cập nhập"));
  }
  return (
    <header className="header">
      <div className="container">
        <div className="body">
          <div className="logo">
            <Link to="/" onClick={handleSetType}>
              PHIMHAY
            </Link>
          </div>
          <div className="search">
            <form className="form" onSubmit={handleSearch}>
              <input placeholder="search" onChange={handleOnchange} />
              <button>
                <AiOutlineSearch className="icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
