import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ currentUser }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("../#home");
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <img
        src={currentUser.avatar}
        alt="Profile"
        className="navbar-avatar cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="dropdown-menu">
          <ul className="menu-list">
            <li onClick={() => navigate("/profile")}>👤 Profile</li>
            <li onClick={() => navigate("/settings")}>⚙️ Settings</li>
            <li onClick={handleLogout}>🚪 Sign Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
