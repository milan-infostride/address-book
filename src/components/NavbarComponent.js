import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid text-light">
            <Link to="/add-address"><button><i className="fas fa-plus-circle"></i></button></Link>
            <span className="text-center">Address Book</span>
            <span className="text-end">Fav <i className="fas fa-star"></i><sup>5</sup></span>
            </div>
        </nav>
     );
}
 
export default NavbarComponent;