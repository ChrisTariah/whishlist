const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
const close  = document.getElementById('drawer-close');

if (burger) burger.addEventListener('click', () => drawer.classList.add('open'));
if (close)  close.addEventListener('click',  () => drawer.classList.remove('open'));

// Close on link tap
if (drawer) {
  drawer.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => drawer.classList.remove('open'))
  );
}