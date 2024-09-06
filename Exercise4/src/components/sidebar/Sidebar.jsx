const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="top-logo-container">
        <div className="logo-container">
          <img src="assets/Logo.png" alt="Logo" className="big-logo" />
          <img src="assets/smallLogo.png" alt="Logo" className="small-logo" />
          <a href="#" className="expand">
            <img src="assets/expand.png" alt="expand" />
          </a>
        </div>
        <hr className="divider" />
      </div>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <img src="assets/overview.png" alt="overview" />
            <p className="text"> Overview </p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="assets/appointments.png" alt="appointments" />
            <p className="text"> Appointments </p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="assets/doctors.png" alt="doctors" />
            <p className="text"> Doctors </p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="assets/pathResults.png" alt="pathology" />
            <p className="text"> Pathology Results </p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="assets/charts.png" alt="chats" />
            <div className="charts-container">
              <p className="text"> Chats </p>
              <div className="circle"> 10 </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
