import React from "react";

function Footer({ handleToggleModal, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>Project Utopia</h1>
      </div>
      {/* The info button toggles the sidebar */}
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
