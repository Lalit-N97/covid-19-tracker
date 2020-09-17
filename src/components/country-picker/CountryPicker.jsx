import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchCountries();
      setFetchedCountries(data);
    };

    fetchAPI();
  }, [fetchedCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => handleCountryChange(event.target.value)}
      >
        <option value=""> Global </option>
        {fetchedCountries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
