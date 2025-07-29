 function sendPasswordReset() {
      const email = document.getElementById("email").value;
      const messageElement = document.getElementById("message");

      if (email) {
        // Simulación de envío (Aquí es donde integras con el backend)
        messageElement.textContent = "Si este correo está registrado, recibirás un enlace de recuperación.";

        // Aquí podrías hacer una llamada AJAX o fetch al backend para procesar la recuperación
        // Ejemplo:
        // fetch('/enviar-recuperacion', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email })
        // })
        // .then(response => response.json())
        // .then(data => {
        //   messageElement.textContent = data.message;
        // });
      } else {
        messageElement.textContent = "Por favor, introduce un correo electrónico válido.";
      }
    }