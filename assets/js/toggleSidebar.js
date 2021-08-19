const sidebar = document.querySelector(".sidebar");
const myModal = new bootstrap.Modal(document.getElementById('popupMenu'))
const breakpointLg = 992;

function toggle() {
  const w = $(this).width();
  if (w < breakpointLg) {
    myModal.toggle();
  }
  else {
    if(sidebar.classList.contains("vlabs-hidden") ) {
      sidebar.classList.remove("vlabs-hidden");
    }
    else {
      sidebar.classList.add("vlabs-hidden");
    }
  }
}
