import { Link } from 'react-router-dom'
import './Nav.css'

export function NavBar()  {
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Leonardo<strong style={{
        color:' #9BAEBF'
    }}>Henrique</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link 
            className="nav-link active"   to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link"  to="/sobre">Sobre</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link"  to="/contato">Contato</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
     
    )
}