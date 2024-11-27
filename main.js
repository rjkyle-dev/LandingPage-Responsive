let lastScrollTop = 0;
const navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navBar.classList.add('hidden');
  } else {
    navBar.classList.remove('hidden'); 
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function openSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'block';
    const menuIconButton = document.getElementById('menu-icon-button');
    menuIconButton.style.display = 'none';
    const cancelIconButton = document.getElementById('cancel-icon-button');
    cancelIconButton.style.display = 'flex';
}

function closeSidebar() {
    const menuIconButton = document.getElementById("menu-icon-button");
    menuIconButton.style.display = "block";
    const cancelIconButton = document.getElementById('cancel-icon-button');
    cancelIconButton.style.display = 'none';
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}


