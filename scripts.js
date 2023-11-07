document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');
    }
})


function showDropdown() {
    document.getElementById("service-dropdown").classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}