import React from "react";

export default function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sidebar">
      {/* Clicking on the overlay should close the sidebar */}
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        {/* Clicking this button should also close the sidebar */}
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
