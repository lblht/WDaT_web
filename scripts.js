document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');
    }
})

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showDropdown() {
    document.getElementById('service-dropdown').classList.toggle('show');
}

function selectService(service) {
    document.getElementById('dropdown-button').innerHTML = service;
    document.getElementById('reservation-service').value = service;
}

function selectTime(time) {
    const selectedTime = document.querySelector('.selected-time');
    if(selectedTime != null)
        selectedTime.classList.remove('selected-time');
    
    document.getElementById(time).classList.add("selected-time")
    document.getElementById('reservation-time').value = time;
}

let submitEvent = new Event('submitEvent');

function submitReservation() {
    if( document.getElementById('reservation-firstname').value == "")
        alert("Prosím vyplnte meno");
    else if( document.getElementById('reservation-lastname').value == "")
        alert("Prosím vyplnte priezvisko");
    else if( document.getElementById('reservation-email').value == "")
        alert("Prosím vyplnte email");
    else if( document.getElementById('reservation-tel').value == "")
        alert("Prosím vyplnte telefónne číslo");
    else if( document.getElementById('reservation-service').value == "")
        alert("Prosím vyberte službu");
    else if( document.getElementById('reservation-time').value == "")
        alert("Prosím vyberte čas");
    else
    {
        document.dispatchEvent(submitEvent);
        document.getElementById("reservation-form").submit();
    }
}