import React, { useState, useEffect, useRef } from "react";
import CountrySelect from "./Components/Search";
import "./App.css";

function App() {
  // const [value, setValue] = useState("");
  // let select = useRef("");
  // const [reload, setReload] = useState(false);
  // useEffect(() => {
  //   document
  //     .getElementById("country-select-demo")
  //     .setAttribute(ref, { select });
  // }, [reload]);
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
              className="mt-1 block w-full p-2 border border-border rounded-md"
              placeholder="€1.00"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-muted-foreground">
              From
            </label>
            <CountrySelect className="w-full"></CountrySelect>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-muted-foreground">
              To
            </label>
            <select className="mt-1 block w-full p-2 border border-border rounded-md">
              <option value="USD">USD - US Dollar</option>
            </select>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold">
              1.00 Euro ={" "}
              <span className="text-primary">1.1166725 US Dollars</span>
            </p>
            <p className="text-sm text-muted-foreground">
              1 USD = 0.895518 EUR
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            We use the mid-market rate for our Converter. This is for
            informational purposes only. You won’t receive this rate when
            sending money.{" "}
            <a href="#" className="text-primary">
              Login to view send rates
            </a>
          </p>

          <div className="flex space-x-4">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">
              Track currency
            </button>
            <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">
              View transfer quote
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Euro to US Dollar conversion — Last updated Aug 27, 2024, 11:03 UTC
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
