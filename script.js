let menuicon = document.querySelector('.menu');
let sidebar = document.querySelector('.sidebar');
let sidebarlarg = document.querySelector('sidebarlarg');
menuicon.onclick = function(){
    sidebar.classList.toggle('hide-sidebar');
    sidebarlarg.classList.toggle('sidebarlarg');
}
