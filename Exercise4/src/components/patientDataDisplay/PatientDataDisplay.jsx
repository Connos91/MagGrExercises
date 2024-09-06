import { memo } from "react";
import selectors from "reactQuery/selectors";

const PatientDataDisplay = () => {
  const data = selectors.useGetPatientData();

  return (
    <div className="patient-card">
      <h1>Patient Card</h1>
      <>
        <p>
          <span className="highlight">Fullname: </span>
          Ola Boluwatife
        </p>
        <p>
          <span className="highlight">Age: </span>
          {data?.current?.wind_speed_10m}
        </p>
        <p>
          <span className="highlight">Gender: </span> Male
        </p>
        <p>
          <span className="highlight">Contact:</span> +35725252525
        </p>
        <p>
          <span className="highlight">Address: </span> 14 Kipros Limassol,
          Cyprus, Country
        </p>
      </>
      <>
        <p>
          <span className="highlight">Heart Rate: </span>
          {data?.elevation}
        </p>
        <p>
          <span className="highlight">Blood Pressure: </span>
          {parseInt(data?.longitude)}
        </p>
        <p>
          <span className="highlight">Temperature: </span>
          {data?.current?.temperature_2m}
        </p>
      </>
    </div>
  );
};

export default memo(PatientDataDisplay);
