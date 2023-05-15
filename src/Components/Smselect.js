import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";
import { useEffect } from "react";

import { Get } from "../Config/Apibasemethods";

const SmSelect = () => {
  // const { label, value, onChange, item1, item2, item3, variant } = props;

  const [val, setVal] = useState([1,2]);
  const [opt, setOpt] = useState("");

  // let getData = () => {
  //   Get("posts")
  //     .then((res) => {
  //       setVal(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // console.log(val);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Box className="my-4" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
        variant={variant}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
        >
          <MenuItem value={item1} >{item1}</MenuItem>
          <MenuItem   value={item2}>{item2}</MenuItem>
          <MenuItem  value={item3} >{item3}</MenuItem>
        </Select> */}
        <select name="" id="" onChange={(e) => setOpt(e.target.value)}>
          <option value="">Select Option</option>
          {val.map((options, index) => {
            return (
              <option value={options} key={index}>
                {options}
              </option>
            );
          })}
        </select>
      </FormControl>
    </Box>
  );
};

export default SmSelect;
