document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.querySelector(".closeModal");

  const mainModalContent = `
    <img src="https://via.placeholder.com/300" alt="Patient Image">
    <br>
    <div class="form-inputs">
        <form class="form-content">
            <label for="name">Patient Name:</label>
            <input type="text" id="name" name="name">
            <br><br>
            <label for="email">Patient Email:</label>
            <input type="email" id="email" name="email">
            <br><br>
            <div class="submit">
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>`;

  const openModal = () => {
    modal.style.display = "flex";
    modalBody.innerHTML = mainModalContent;
  };

  const closeModal = () => {
    modal.style.display = "none";
    modalBody.innerHTML = "";
  };

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});
