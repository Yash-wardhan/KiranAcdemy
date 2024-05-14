import Layout from "./Pages/Layout";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import User from "./Pages/User";
import { useState } from "react";

function App() {
  const navigation = useNavigate()
  const [search, setSearch] = useState("");
  const inputhandle = () => {
    navigation('/search/data')
    // Navigate to the user route based on search input
  };

  return (
    <BrowserRouter> {/* Wrap your entire application with BrowserRouter */}
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#e3f2fd' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/blog">Blog</Link>
            </div>
            <form className="d-flex" onSubmit={inputhandle}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearch(e.target.value)} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <Routes>
          {/* Use the Layout component for nested routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/" element={<Layout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
