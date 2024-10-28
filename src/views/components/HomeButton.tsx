import React from "react";
import { Link } from "react-router-dom";

export const HomeButton: React.FC = () => {
  return (
    <div>
      <p>
        <Link to="/">HomeButton</Link>
      </p>
    </div>
  );
};
