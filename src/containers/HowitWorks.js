import React from "react";
import { red, wheat } from "../utils/colors";
import screen from "../assets/screen.png";

export default function HowitWorks() {
  return (
    <div
      style={{
        background: wheat,
        padding: "15% 0 0",
        display: "flex",
        height: "90vh",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottom: '1px solid #E1E1E1'
      }}
    >
      <h1>
        <span style={{ color: `${red}` }}>HOW</span> IT WORKS
      </h1>
      <img src={screen} alt="" width="80%" />
    </div>
  );
}
