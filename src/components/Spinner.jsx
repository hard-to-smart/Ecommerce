import React from 'react';
import { Spinner as Sp } from "@material-tailwind/react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Sp fontSize={32} />
    </div>
  );
};

export default Spinner;
