   document.addEventListener("DOMContentLoaded", () => {
            let registros = [];

            // Formatear fecha y hora al estilo local
            function formatearFechaHoraLocal(fechaHora) {
                const opciones = {
                    timeZone: 'America/Bogota',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                };
                return new Date(fechaHora).toLocaleString('es-CO', opciones);
            }

            // Registrar horas de ingreso y salida
            function registrarHoras() {
                const horaIngreso = document.getElementById('horaIngreso').value;
                const horaSalida = document.getElementById('horaSalida').value;

                if (horaIngreso && horaSalida) {
                    const fechaIngreso = formatearFechaHoraLocal(horaIngreso);
                    const fechaSalida = formatearFechaHoraLocal(horaSalida);

                    registros.push({
                        fecha: new Date().toLocaleDateString('es-CO'),
                        ingreso: fechaIngreso,
                        salida: fechaSalida
                    });

                    document.getElementById('horaIngreso').value = '';
                    document.getElementById('horaSalida').value = '';

                    const mensajeExitoso = document.getElementById('mensajeExitoso');
                    mensajeExitoso.style.display = 'block';
                    setTimeout(() => {
                        mensajeExitoso.style.display = 'none';
                    }, 3000);

                    actualizarHistorial();
                } else {
                    alert('Por favor, ingresa ambas horas.');
                }
            }

            // Actualizar tabla de historial
            function actualizarHistorial() {
                const tbody = document.querySelector('.content__historial-body');
                tbody.innerHTML = ''; // Limpia el contenido previo

                registros.forEach(registro => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                <td>${registro.fecha}</td>
                <td>${registro.ingreso}</td>
                <td>${registro.salida}</td>
            `;
                    tbody.appendChild(row);
                });
            }

            // Cambiar de sección
            function toggleSection(sectionId) {
                document.querySelectorAll('.content__section').forEach(section => {
                    section.classList.remove('content__section--active');
                });

                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.classList.add('content__section--active');
                }
            }

            // Inicializar evento de registro de horas
            document.querySelector('.content__register').addEventListener('click', registrarHoras);

            // Inicializar navegación de botones
            document.querySelectorAll('.sidebar__button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const sectionId = event.currentTarget.getAttribute('onclick').match(/'(.+)'/)[1];
                    toggleSection(sectionId);
                });
            });

            // Mostrar la sección "Captura Horas" al cargar la página
            toggleSection('captura-horas');
        });
