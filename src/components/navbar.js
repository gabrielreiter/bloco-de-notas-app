import React from "react";
import NavBarItem from "./navbarItem";
import 'bootswatch/dist/flatly/bootstrap.css'

class NavBar extends React.Component{

  render(){
    return(    
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NotasApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <NavBarItem href="#/" label="Home"/>
              <NavBarItem href="#/createNote" label="Criar Nota"/>
            </ul>
          </div>
        </div>
      </nav>      
    ) 
  }
}

export default NavBar