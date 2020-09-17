import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    let modifiedUrl = url;
    if (country) modifiedUrl = `${url}/countries/${country}`;

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(modifiedUrl);

    const customizedData = { confirmed, recovered, deaths, lastUpdate };
    return customizedData;
  } catch (error) {
    console.log("Error in fetching general data - ", error);
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const customizedData = data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });
    return customizedData;
  } catch (error) {
    console.log("Error in fetching DailyData - ", error);
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log("Error in fetching countries - ", error);
    return error;
  }
};
