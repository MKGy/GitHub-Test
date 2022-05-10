const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openModalBtn.addEventListener("click", (e) => {
  // opening a window that sits at the center of a black screen
  modal.classList.add("open");
  // opening the black screen
  overlay.classList.add("open");
});

/*

closeModalBtn.addEventListener("click", (e) => {
  // closing the window that sits at the center of the black screen
  modal.classList.remove("open");
  // closing the black screen
  overlay.classList.remove("open");
});

*/
closeModalBtn.addEventListener("click", closeModal);

/*

overlay.addEventListener("click", (e) => {
  // by clicking outside of the overlay close the modal
  modal.classList.remove("open");
  // by clicking outside close the black screen
  overlay.classList.remove("open");
});

*/
overlay.addEventListener("click", closeModal);

// a wrapper function to wrap the remove() methods which are both used inside clodeModalBtn and openModalBtn
function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
