import { lazy, Suspense } from "react";

const VitalsCharts = lazy(() => import("../vitalsCharts"));
const PatientDataDisplay = lazy(() => import("../patientDataDisplay"));

import Nav from "../nav";

const MainContent = () => {
  return (
    <section id="content">
      <Nav />
      <Suspense fallback="Loading..">
        <div className="main-content">
          <PatientDataDisplay />
          <VitalsCharts />
        </div>
      </Suspense>
    </section>
  );
};

export default MainContent;
