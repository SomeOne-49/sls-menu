"use client";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";

const IelInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return <MuiTelInput className='w-full' value={value} onChange={handleChange} />;
};

export default IelInput;
