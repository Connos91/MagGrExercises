export const LINE_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Vitals Over Time",
    },
  },
  scales: {
    x: {
      type: "time",
      title: {
        display: true,
        text: "Time",
      },
      time: {
        unit: "hour",
        tooltipFormat: "yyyy-MM-dd HH:mm",
      },
    },
    y: {
      title: {
        display: true,
        text: "Temp",
      },
    },
  },
};
