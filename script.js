function redirectToWhatsApp() {
    const phone = "918987726266"; 
    const message = "I want to make a tournament application";
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function redirectToEmail() {
    const email = "mailto:createprincemahto@gmail.com?subject=Tournament Application&body=I want to make a tournament application.";
    window.location.href = email;
}

function redirectToPhone() {
    const phone = "tel:8987726266";
    window.location.href = phone;
}

function toggleMenu() {
    const menuButtons = document.getElementById('menu-buttons');
    if (menuButtons.style.display === 'none' || menuButtons.style.display === '') {
        menuButtons.style.display = 'flex';
    } else {
        menuButtons.style.display = 'none';
    }
}
