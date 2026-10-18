/* POLIMATCH - FILTROS DE PARTIDOS */

document.addEventListener("DOMContentLoaded", () => {

    // Obtener los botones y las tarjetas
    const botones = document.querySelectorAll("#partidos .filtro-btn");
    const partidos = document.querySelectorAll("#partidos .partido-item");

    // Detectar cuando se presiona un filtro
    botones.forEach((boton) => {

        boton.setAttribute(
            "aria-pressed",
            String(boton.classList.contains("activo"))
        );

        boton.addEventListener("click", () => {

            const filtro = boton.dataset.filtro;

            // Actualizar el botón seleccionado
            botones.forEach((otroBoton) => {

                const seleccionado = otroBoton === boton;

                otroBoton.classList.toggle("activo", seleccionado);
                otroBoton.setAttribute("aria-pressed", String(seleccionado));

            });

            // Mostrar solamente los partidos correspondientes
            partidos.forEach((partido) => {

                const mostrar = filtro === "todos" ||
                    partido.dataset.modalidad === filtro;

                partido.style.display = mostrar ? "" : "none";

            });

        });

    });

});