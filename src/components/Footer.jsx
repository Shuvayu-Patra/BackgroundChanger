import React from "react";
import './footer.css'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "61vh",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
      <div className="icons text-center">
        <a href="https://www.facebook.com/shuvayu.patra" target="_blank">
          <i className="fa-brands fa-facebook fa-lg mx-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/shuvayu-patra-2506b8221/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-lg mx-2" />
        </a>
        <a href="https://github.com/Shuvayu-Patra" target="_blank">
          <i className="fa-brands fa-github fa-lg mx-2" />
        </a>
        <a
          href="https://www.instagram.com/ami_shuvayu/?next=%2F&hl=en"
          target="_blank"
        >
          <i className="fa-brands fa-instagram fa-lg mx-2" />
        </a>
      </div>
    </footer>
  );
};
