import React from "react";

import { Link } from "react-scroll";

const Button = () => {
  return (
    <div>
      <Link className="button" href="readme" to="readmeid" smooth duration={1000}>
        Know more
      </Link>
    </div>
  );
};

export default Button;

