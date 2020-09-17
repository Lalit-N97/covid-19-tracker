import React from "react";

// import Chart from "./components/chart/Chart";
// import Cards from "./components/cards/Cards";
// import CountryPicker from "./components/country-picker/CountryPicker";

// OR
// use this method which requires a new index.js file inside components folder
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/"; // by default in any folder the imported function is searched in index.js file for every folder.

import styles from "./App.module.css";

class App extends React.Component {
  // this kind of state initialization automatically
  // constructs the constructer in the backend
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
