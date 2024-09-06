const toggleDropdown = () => {
  document
    .getElementById("dropdown-profile-menu")
    .classList.add("showDropdown");
};

document
  .querySelector(".dropdown-profile")
  .addEventListener("click", () => toggleDropdown());

window.onclick = (event) => {
  if (!event.target.matches(".dropdown-profile")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showDropdown")) {
        openDropdown.classList.remove("showDropdown");
      }
    }
  }
};
