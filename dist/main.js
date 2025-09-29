"use strict";
// Selecciona el formulario de suscripción
const form = document.querySelector("form");
// Selecciona el input donde el usuario escribe su email
const emailInput = document.querySelector("#emailInput");
// Selecciona la sección principal que contiene el formulario
const section = document.querySelector("section");
// Selecciona el modal de éxito (dialog)
const modal = document.querySelector("dialog");
// Selecciona el botón para cerrar el modal
const dismissBtn = document.querySelector("#dismissBtn");
// Selecciona el span donde se mostrará el email ingresado por el usuario
const userEmail = document.querySelector("#userEmail");
// Evento que se dispara al enviar el formulario
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    // Si el campo de email está vacío, muestra un mensaje de error personalizado
    if (emailInput.value.trim() === "") {
        emailInput.setCustomValidity("Esto esta vacio");
    }
    else {
        // Si el email es válido, actualiza el span del modal con el email ingresado
        if (userEmail) {
            userEmail.innerHTML = emailInput.value;
        }
        // Oculta la sección principal y muestra el modal de éxito
        section === null || section === void 0 ? void 0 : section.classList.add("hidden");
        section === null || section === void 0 ? void 0 : section.classList.remove("lg:flex");
        modal === null || modal === void 0 ? void 0 : modal.showModal();
    }
    // Nota: la sección se oculta agregando la clase 'hidden' al hacer click en submit
});
// Limpia el mensaje de error personalizado cuando el usuario modifica el input
emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
});
// Evento que se dispara al hacer click en el botón de cerrar el modal
dismissBtn === null || dismissBtn === void 0 ? void 0 : dismissBtn.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.close(); // Cierra el modal de éxito
    section === null || section === void 0 ? void 0 : section.classList.remove("hidden"); // Muestra la sección principal nuevamente
    section === null || section === void 0 ? void 0 : section.classList.add("lg:flex"); // Restaura la clase de diseño para pantallas grandes
    emailInput.value = ""; // Limpia el campo de email para un nuevo intento
});
//# sourceMappingURL=main.js.map