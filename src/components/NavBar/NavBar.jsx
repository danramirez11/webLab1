import "./NavBar.css";

function NavBar (){
    return (
        <>
  <nav className="navbar">
    <img src="https://www.hoyoverse.com/_nuxt/img/logo-light.3def3bc.png" className="logo" alt="Hoyoverse Logo" />
    <ul className="nav-links">
      <li><a href="#" className="nav-link">Home</a></li>
      <li><a href="#" className="nav-link">News</a></li>
      <li><a href="#" className="nav-link">About Us</a></li>
      <li><a href="#" className="nav-link">Careers</a></li>
      <li><a href="#" className="nav-link">Help Center</a></li>
    </ul>
    <img className="nav-menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="" />
  </nav>
</>

    )
}

export default NavBar;