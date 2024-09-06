const Nav = () => {
  return (
    <nav>
      <div className="menu">
        <i className="bx bx-menu icon-large"></i>
      </div>
      <form action="#">
        <div className="form-input">
          <i className="bx bx-search icon-position"></i>
          <input
            id="Search"
            type="search"
            name="search"
            placeholder="Search pathology results"
          />
        </div>
      </form>
      <div className="user-info">
        <div className="left-container">
          <div className="notification-container">
            <div className="notification"></div>
          </div>
          <span className="vertical-line"></span>
        </div>
        <div className="profile-container">
          <button className="dropdown-profile">
            <img src="assets/profil.png" alt="Photo profil" />
          </button>
          <div className="patient-info">
            <h4 className="patient-name">Ola Boluwatife</h4>
            <p className="patient">PATIENT</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
