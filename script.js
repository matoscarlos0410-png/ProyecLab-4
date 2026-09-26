/* =====================================================
   PROYECTOLAB V4
   JAVASCRIPT
===================================================== */


/* =====================================================
   BASE DE DATOS DE LUGARES
===================================================== */

const places = [

    {
        name: "Mercado de Sausal",
        category: "place",
        label: "Comercio",
        emoji: "🛒",
        description:
            "Espacio comercial relacionado con el abastecimiento y actividad económica de la comunidad.",
        history:
            "El mercado forma parte de la actividad comercial de Sausal y permite relacionar la vida cotidiana de la comunidad con el comercio local.",
        map:
            "Mercado de Sausal Chicama La Libertad"
    },


    {
        name: "Plaza de Sausal",
        category: "place",
        label: "Lugar público",
        emoji: "🏛️",
        description:
            "Espacio central y punto de referencia de la comunidad.",
        history:
            "La plaza funciona como uno de los principales puntos de referencia y encuentro de la localidad.",
        map:
            "Plaza de Sausal La Libertad"
    },


    {
        name: "Plazuela El Maestro",
        category: "park",
        label: "Plazuela",
        emoji: "🌳",
        description:
            "Espacio público de referencia para la comunidad.",
        history:
            "Las plazuelas y espacios públicos de Sausal forman parte de la vida comunitaria y de los lugares de encuentro de sus habitantes.",
        map:
            "Plazuela El Maestro Sausal"
    },


    {
        name: "Parque Infantil Noli",
        category: "park",
        label: "Parque",
        emoji: "🛝",
        description:
            "Espacio recreativo destinado principalmente a actividades infantiles.",
        history:
            "Los espacios recreativos cumplen una función importante para la convivencia y recreación de niños y familias.",
        map:
            "Parque Infantil Noli Sausal"
    },


    {
        name: "Piscina de Sausal",
        category: "place",
        label: "Recreación",
        emoji: "🏊",
        description:
            "Espacio destinado a actividades recreativas y deportivas.",
        history:
            "La piscina forma parte de la infraestructura recreativa disponible para actividades deportivas y de convivencia.",
        map:
            "Piscina de Sausal Chicama La Libertad"
    },


    {
        name: "Cerro 1 de Mayo",
        category: "culture",
        label: "Cultura",
        emoji: "⛰️",
        description:
            "Lugar relacionado con actividades y tradiciones locales.",
        history:
            "El Cerro 1 de Mayo aparece relacionado con tradiciones y actividades de la comunidad de Sausal.",
        map:
            "Cerro 1 de Mayo Sausal La Libertad"
    },


    {
        name: "I.E. José Carlos Mariátegui",
        category: "education",
        label: "Colegio",
        emoji: "🎓",
        description:
            "Institución educativa pública ubicada en Sausal.",
        history:
            "La institución fue creada el 17 de octubre de 1965 para atender a estudiantes del centro poblado de Sausal y anexos.",
        map:
            "I.E. José Carlos Mariátegui Sausal"
    },


    {
        name: "I.E. 81971 Alfonso Ugarte",
        category: "education",
        label: "Colegio",
        emoji: "🏫",
        description:
            "Institución educativa vinculada a la oferta educativa local.",
        history:
            "Forma parte de las referencias educativas que pueden utilizar las familias de la zona.",
        map:
            "I.E. 81971 Alfonso Ugarte Sausal"
    },


    {
        name: "Jardines de Sausal",
        category: "education",
        label: "Inicial",
        emoji: "🧒",
        description:
            "Espacios educativos destinados a la educación inicial.",
        history:
            "La educación inicial representa una parte importante de los servicios educativos disponibles para las familias de la comunidad.",
        map:
            "jardín inicial Sausal Chicama La Libertad"
    },


    {
        name: "Municipalidad de Sausal",
        category: "service",
        label: "Institución",
        emoji: "🏢",
        description:
            "Institución relacionada con la administración local del centro poblado.",
        history:
            "La Municipalidad del Centro Poblado de Sausal forma parte de la organización institucional de la comunidad.",
        map:
            "Municipalidad Centro Poblado Sausal Chicama"
    },


    {
        name: "Centro de Salud Alto Perú Sausal",
        category: "service",
        label: "Salud",
        emoji: "🏥",
        description:
            "Servicio de salud ubicado en el ámbito de Sausal.",
        history:
            "Los servicios de salud son parte de la infraestructura necesaria para atender las necesidades de la población local.",
        map:
            "Centro de Salud Alto Perú Sausal"
    },


    {
        name: "Comisaría Rural Sausal",
        category: "service",
        label: "Seguridad",
        emoji: "👮",
        description:
            "Servicio institucional relacionado con la seguridad de la localidad.",
        history:
            "La presencia de servicios de seguridad forma parte de la infraestructura institucional de la comunidad.",
        map:
            "Comisaría Rural Sausal La Libertad"
    },


    {
        name: "Terminal Terrestre Sausal",
        category: "transport",
        label: "Transporte",
        emoji: "🚌",
        description:
            "Punto relacionado con el transporte terrestre de la localidad.",
        history:
            "El transporte conecta a Sausal con otras localidades y facilita el desplazamiento de habitantes y visitantes.",
        map:
            "Terminal Terrestre Sausal La Libertad"
    },


    {
        name: "Estación de Colectivos Sausal - Casagrande",
        category: "transport",
        label: "Colectivos",
        emoji: "🚐",
        description:
            "Referencia para el transporte entre Sausal y Casagrande.",
        history:
            "Los servicios de colectivos forman parte de la movilidad cotidiana entre Sausal y otras localidades cercanas.",
        map:
            "Estación de Colectivos Sausal Casagrande"
    },


    {
        name: "Mari Mar Restaurante",
        category: "business",
        label: "Restaurante",
        emoji: "🍽️",
        description:
            "Restaurante ubicado en Sausal.",
        history:
            "Forma parte de la oferta gastronómica local registrada para la guía de ProyecLab.",
        map:
            "Mari Mar Restaurante Sausal La Libertad"
    },


    {
        name: "Restaurante & Cevichería Keylita",
        category: "business",
        label: "Restaurante",
        emoji: "🐟",
        description:
            "Restaurante y cevichería de Sausal.",
        history:
            "Forma parte de los negocios gastronómicos que ProyecLab busca organizar para facilitar su descubrimiento.",
        map:
            "Restaurante Cevichería Keylita Sausal La Libertad"
    },


    {
        name: "Restaurant Liz",
        category: "business",
        label: "Restaurante",
        emoji: "🍴",
        description:
            "Establecimiento gastronómico de la localidad.",
        history:
            "Es presentado en ProyecLab como parte de la oferta gastronómica local.",
        map:
            "Restaurant Liz Sausal La Libertad"
    },


    {
        name: "Pollería Bendición de Dios",
        category: "business",
        label: "Pollería",
        emoji: "🍗",
        description:
            "Negocio gastronómico identificado en Sausal.",
        history:
            "Forma parte de los establecimientos gastronómicos que pueden ser consultados mediante ProyecLab.",
        map:
            "Pollería Bendición de Dios Sausal La Libertad"
    },


    {
        name: "Pollería Yayita",
        category: "business",
        label: "Pollería",
        emoji: "🍗",
        description:
            "Negocio identificado públicamente en Chicama. Su ubicación exacta en Sausal debe confirmarse.",
        history:
            "ProyecLab la incluye como referencia comercial, pero mantiene la indicación de que su ubicación específica en Sausal debe verificarse.",
        map:
            "Pollería Yayita Chicama La Libertad"
    }

];


/* =====================================================
   CREAR URL DE GOOGLE MAPS
===================================================== */

function createMapsURL(query) {

    return (
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(query)
    );

}


function openMaps(query) {

    window.open(
        createMapsURL(query),
        "_blank",
        "noopener,noreferrer"
    );

}


/* =====================================================
   GENERAR TARJETAS
===================================================== */

const placesGrid =
    document.getElementById("placesGrid");


function renderPlaces(list) {

    placesGrid.innerHTML = "";


    if (list.length === 0) {

        placesGrid.innerHTML = `
            <div class="empty-result">
                <h3>No encontramos ese lugar</h3>
                <p>
                    Prueba con otro nombre o categoría.
                </p>
            </div>
        `;

        return;
    }


    list.forEach((place) => {

        const card =
            document.createElement("article");

        card.className =
            "place-card reveal";


        card.innerHTML = `

            <div class="emoji">
                ${place.emoji}
            </div>

            <h3>
                ${place.name}
            </h3>

            <p>
                ${place.description}
            </p>

            <span class="place-category">
                ${place.label}
            </span>

            <span class="map-link">
                📍 Abrir ubicación en Google Maps
            </span>

        `;


        card.addEventListener(
            "click",
            () => openMaps(place.map)
        );


        placesGrid.appendChild(card);

    });


    activateRevealAnimations();

}


/* =====================================================
   FILTROS
===================================================== */

const filters =
    document.querySelectorAll(".filter");


let currentFilter = "all";


filters.forEach((button) => {

    button.addEventListener("click", () => {

        filters.forEach((item) => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        currentFilter =
            button.dataset.filter;


        applyFilters();

    });

});


/* =====================================================
   BUSCADOR
===================================================== */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener(
    "input",
    applyFilters
);


function applyFilters() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const filtered =
        places.filter((place) => {

            const matchesCategory =
                currentFilter === "all" ||
                place.category === currentFilter;


            const matchesSearch =
                place.name
                    .toLowerCase()
                    .includes(search) ||

                place.description
                    .toLowerCase()
                    .includes(search) ||

                place.label
                    .toLowerCase()
                    .includes(search);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    renderPlaces(filtered);

}


/* =====================================================
   MENÚ MÓVIL
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


menuToggle.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle("open");

    }
);


mainNav.querySelectorAll("a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

            }
        );

    });


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

function activateRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .08
            }
        );


    elements.forEach(
        (element) => {

            observer.observe(element);

        }
    );

}


/* =====================================================
   AÑO AUTOMÁTICO
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   CARGAR LUGARES
===================================================== */

renderPlaces(places);


/* =====================================================
   ANIMACIONES GENERALES
===================================================== */

document
    .querySelectorAll(
        ".history-card, .fact-card, .timeline-item, " +
        ".info-card, .place-large, .culture-card, " +
        ".recommendation-box, .project-box, .sources a"
    )
    .forEach((element) => {

        element.classList.add("reveal");

    });


activateRevealAnimations();


/* =====================================================
   CONSOLA
===================================================== */

console.log(
    "ProyecLab V4 iniciado correctamente."
);

console.log(
    "WhatsApp configurado para recomendaciones."
);
