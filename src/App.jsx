import React, { useState, useEffect, useRef } from "react";
// import CountrySelect from "./Components/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import cc from "./assets/data/cc.json";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [res, setRes] = useState(false);
  const [res2, setRes2] = useState(false);
  // const [comValue, setComValue] = useState([]);
  return (
    <>
      <div className="bg-blue-900 w-full h-[200px] absolute -z-10"></div>
      <div className="px-[180px] pt-24 z-10">
        <div className="p-6 bg-card rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-4">Convert</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-muted-foreground">
              Amount
            </label>
            <input
              type="text"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setValue(e.target.value);
                } else {
                  setValue(1);
                }
              }}
              className="mt-1 block w-full p-2 border border-border rounded-md"
              placeholder="€1.00"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-muted-foreground">
              From
            </label>
            <Autocomplete
              onChange={(event, inputValue) => {
                console.log(inputValue);
                setRes(inputValue);
              }}
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
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-muted-foreground">
              To
            </label>
            <Autocomplete
              // value={localStorage.getItem("value2")}
              onChange={(event, inputValue) => {
                console.log(inputValue);
                setRes2(inputValue);
                // location.reload();
              }}
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
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold">
              <span className="text-primary"></span>
            </p>
            <p className="text-sm text-muted-foreground">
              {value + " "}
              {res != false && Object.keys(res.currencies)}=
              {res2 != false &&
                value * Object.values(res2.currencies)[0].rateToUSD}
              {res2 != false && Object.keys(res2.currencies)}
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            We use the mid-market rate for our Converter. This is for
            informational purposes only. You won’t receive this rate when
            sending money.
            <a href="#" className="text-primary">
              Login to view send rates
            </a>
          </p>

          <p className="text-sm text-muted-foreground mt-4">
            Euro to US Dollar conversion — Last updated Aug 27, 2024, 11:03 UTC
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

// useEffect(() => {
//   if (localStorage.getItem("value")) {
//     setInputValue(JSON.parse(localStorage.getItem("value")));
//     setRes(Object.values(inputValue.currencies)[0]);
//     console.log(Object.values(inputValue.currencies));
//   }
// }, []);

// const [res2, setRes2] = useState(false);
// const [inputValue2, setInputValue2] = useState(
//   JSON.parse(localStorage.getItem("value"))
// );
// useEffect(() => {
//   if (localStorage.getItem("value2")) {
//     setInputValue2(JSON.parse(localStorage.getItem("value2")));
//     console.log(13, Object.values(inputValue.currencies)[0].rateToUSD);
//     setRes2(Object.values(inputValue.currencies)[0]);
//     console.log(Object.values(inputValue.currencies));
//   }
// }, []);
