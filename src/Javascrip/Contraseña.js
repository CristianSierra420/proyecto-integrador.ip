 function sendPasswordReset() {
      const email = document.getElementById("email").value;
      const messageElement = document.getElementById("message");

      if (email) {
        // Simulación de envío (Aquí es donde integras con el backend)
        messageElement.textContent = "Si este correo está registrado, recibirás un enlace de recuperación.";
function sendPasswordReset() {
  const email = document.getElementById("email").value;
  const messageElement = document.getElementById("message");

  if (email) {
    // Simulación de envío (sin backend)
    messageElement.textContent = "Si este correo está registrado, recibirás un enlace de recuperación.";
  } else {
    messageElement.textContent = "Por favor, introduce un correo electrónico válido.";
  }
}
 }
}
  
