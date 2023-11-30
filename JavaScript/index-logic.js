// Adds functionality to the website when it fully loads
document.addEventListener("DOMContentLoaded", function () {

    // Close note 
    document.getElementById("btn-close-note").addEventListener("click", () => {
        document.getElementById("note").style.display = "none";
    });

});

/**
 * Function in charge to open the modal by its id
 * @param {*} id of modal to open
 */
function openModal(id) {

    const modalContainer = document.getElementById(id)
    modalContainer.style.display = 'block';

    setTimeout(() => {
        modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.634)"
        modalContainer.querySelector('div').style.top = '50%'
    }, 0);

}

/**
 * Function to close the modal opened 
 * @param {*} id of modal to close 
 */
function closeModal(id) {

    const modalContainer = document.getElementById(id)
    modalContainer.style.display = 'none'
    setTimeout(() => {

        modalContainer.style.backgroundColor = 'transparent'
    }, 0);

    modalContainer.querySelector('div').style.top = '-100%'
}

/**
 * Add functionality for open PQR page in a new tab
 */
function openPQRPage() {
    // Abrir una nueva página en una nueva ventana o pestaña
    window.open("../contact.html", "_blank");

}