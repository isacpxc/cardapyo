import React from "react"
import "./header.css"

/* Header component */
class Header extends React.Component{
  

  render(){
    return(
      <div>
        <div id="hold-all">
          <div id="logo-store">
            <img src="/assets/img/logo.jpg" alt="imagem logo do local" />
          </div>
        </div>

        <div id="page-name">
          <span>Cardápio</span>
        </div>
      </div>

      
    );
  }

}

export default Header;