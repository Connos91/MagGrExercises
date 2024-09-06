import { memo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";

import selectors from "reactQuery/selectors";

import * as C from "./constants";
import * as U from "./utils";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  Tooltip,
  Legend
);

const VitalsCharts = () => {
  const { hourly } = selectors.useGetPatientData();
  const lineData = U.lineData(hourly);

  return (
    <div className="vitals-charts">
      <h2>Patient Temperature Chart</h2>
      <Line data={lineData} options={C.LINE_OPTIONS} />
    </div>
  );
};

export default memo(VitalsCharts);
