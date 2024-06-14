// src/app/page.tsx
"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import useStyles from "../hook/useStyles";

const Home: React.FC = () => {
  const { buttonStyles } = useStyles();

  return (
    <div>
      <h1>Home Page</h1>
      <Button sx={buttonStyles}>Hello Material-UI</Button>
    </div>
  );
};

export default Home;
