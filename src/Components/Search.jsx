import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import cc from "../assets/data/cc.json";
import React, { useEffect, useRef, useState } from "react";

export default function CountrySelect() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={cc}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={option.flag}
              src={option.flag}
              alt=""
            />
            {option.currencies &&
              Object.keys(option.currencies) + " - " + option.name}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          className="selectCountry"
          label="Type to search..."
          onChange={(e) => {
            console.log(e);
            setValue(e.target.value);
          }}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password",
            },
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
