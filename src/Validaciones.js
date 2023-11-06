
  // Función para validar campos de entrada
  export function validarCampo(input) {
    const valor = input.value.trim();
    if (valor === '') {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }
  }
  

// Función para validar una dirección de correo electrónico
export function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailRegex.test(email)) {
      return false;
    }
  
    return true;
  }
  
  
  // Función para validar un número de teléfono
  export function validarTelefono() {
    const phoneRegex = /^\d{10}$/; // Se asume que el número debe contener exactamente 10 dígitos
    const telefonoInput = document.getElementById("telefono");
    const resultadoTelefono = document.getElementById("resultadoTelefono");
    
    if (!phoneRegex.test(telefonoInput.value.replace(/\D/g, ''))) {
        resultadoTelefono.textContent = "El número de teléfono no es válido. Debe contener 10 dígitos.";
        return false;
    }
    
    return true;
  }
  
// Función para validar contraseñas
export function validarContrasena(contrasena) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
  
    if (!passwordRegex.test(contrasena)) {
      return false;
    }
  
    return true;
  }
  
  
  // Función para verificar que las contraseñas coincidan
// Función para verificar que las contraseñas coincidan
export function verificarContrasenas(contrasena, confirmarContrasena) {
    if (contrasena != confirmarContrasena){
        return false;
    }
    return true;
  }
  
  