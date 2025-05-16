const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('toggle-sidebar');

toggleBtn.addEventListener('click', () => {
  const isHidden = sidebar.classList.toggle('hidden');
  
  // Switch button icon accordingly
  toggleBtn.textContent = isHidden ? '☰' : '✕';
});
