export const lineData = (data) => {
  return {
    labels: data?.time.slice(-15),
    datasets: [
      {
        label: "Temperature",
        data: data?.temperature_2m.slice(-15),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };
};
