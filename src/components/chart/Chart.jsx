import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    fetchAPI();
  }, []);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
      }}
    />
  ) : null;

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map((data) => data.date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
