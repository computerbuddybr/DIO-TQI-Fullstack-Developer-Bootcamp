import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col-3">
          <a
            href="http://adrianacerdeira.info"
            alt="Link para o site da Adriana Cerdeira"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="http://adrianacerdeira.info/public/images/logo.png"
              alt="Avatar e logo da Adriana"
            />
          </a>
        </div>
        <div className="col-9">
          <nav className="container">
            <h1>Adriana's Blog</h1>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
