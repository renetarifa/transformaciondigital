// Asegurarse de que el DOM está completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las secciones con la clase 'card'
    const cards = document.querySelectorAll('.card');

    // Aplicar estilos adicionales para cada tarjeta
    cards.forEach(card => {
        card.style.transition = 'transform 0.3s ease-in-out';

        // Añadir evento de ratón para resaltar la tarjeta al pasar el ratón
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const asignaturaCard = document.getElementById("asignaturaCard");
    const leerMasBtn = document.getElementById("leerMasBtn");

    // Contenido completo de la asignatura
    const contenidoCompleto = `
    <li><strong>Programación Fundamentals (120 horas)</strong>
    <ul>
        <li>Introducción a lenguajes de programación (por ejemplo, JSON, Python, JavaScript).</li>
        <li>Estructuras de datos y algoritmos básicos.</li>
        <li>Desarrollo de proyectos prácticos.</li>
    </ul>
</li>

<li><strong>Robótica y Automatización (80 horas)</strong>
    <ul>
        <li>Principios básicos de robótica.</li>
        <li>Diseño y construcción de robots simples.</li>
        <li>Aplicaciones prácticas en la industria.</li>
    </ul>
</li>

<li><strong>Análisis de Sistemas (60 horas)</strong>
    <ul>
        <li>Comprender sistemas informáticos.</li>
        <li>Métodos de análisis y diseño de sistemas.</li>
        <li>Herramientas y técnicas de modelado.</li>
    </ul>
</li>

<li><strong>Inteligencia Artificial y Machine Learning (120 horas)</strong>
    <ul>
        <li>Conceptos fundamentales de IA.</li>
        <li>Algoritmos de Machine Learning.</li>
        <li>Desarrollo de proyectos de IA.</li>
    </ul>
</li>

<li><strong>Desarrollo de Proyectos (40 horas)</strong>
    <ul>
        <li>Metodologías de gestión de proyectos.</li>
        <li>Aplicación práctica en proyectos tecnológicos.</li>
        <li>Presentación y defensa de proyectos.</li>
    </ul>
</li>

<li><strong>Habilidades Blandas y Comunicación (80 horas)</strong>
    <ul>
        <li>Comunicación efectiva en entornos tecnológicos.</li>
        <li>Trabajo en equipo y colaboración.</li>
        <li>Resolución de conflictos y toma de decisiones.</li>
    </ul>
</li>

<li><strong>Inteligencia Emocional en el Ámbito Profesional (60 horas)</strong>
    <ul>
        <li>Autoconocimiento y autorregulación emocional.</li>
        <li>Empatía y relaciones interpersonales.</li>
        <li>Manejo del estrés y la presión laboral.</li>
    </ul>
</li>

<li><strong>Ética en la Tecnología (20 horas)</strong>
    <ul>
        <li>Reflexión sobre las implicaciones éticas de la tecnología.</li>
        <li>Desarrollo sostenible y responsabilidad social.</li>
    </ul>
</li>

    `;

    // Variable para rastrear el estado del botón
    let expandido = false;

    // Función para cambiar la altura de la tarjeta asignatura
    function toggleAsignaturaHeight() {
        if (expandido) {
            asignaturaCard.style.height = "auto";
            leerMasBtn.textContent = "Leer menos";
        } else {
            asignaturaCard.style.height = "300px"; // Altura máxima deseada
            leerMasBtn.textContent = "Leer más";
        }
        expandido = !expandido;
    }

    // Agrega un evento de clic al botón "Leer más"
    leerMasBtn.addEventListener("click", toggleAsignaturaHeight);
});
