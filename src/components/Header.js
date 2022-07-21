import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "2rem",
        borderBottom: "1px solid grey",
        height: "4rem",
      }}
    >
      <h3 style={{ color: "grey", fontSize: "25px" }}>Fake Shop</h3>
    </div>
  );
};

export default Header;
