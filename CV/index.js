function startJs() {
  const modal = document.getElementById('detailsModal');
  const btn = document.getElementById('myBtn');
  const span = document.getElementsByClassName('close')[0];

  btn.onclick = function () {
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
//setTimeout(startJs, 1000);
document.addEventListener("DOMContentLoaded", startJs);
