// Inicializamos variables para la suma y el conteo
let suma = 0;
let conteo = 0;

// Solicitamos al usuario que introduzca números
let numero = parseFloat(prompt("Introduce un número (introduce un número negativo para finalizar):"));

// Utilizamos un bucle while para continuar pidiendo números hasta que se introduzca un número negativo
while (numero >= 0) {
  // Sumamos el número introducido a la suma total
  suma += numero;
  // Incrementamos el conteo de números introducidos
  conteo++;

  // Pedimos al usuario el siguiente número
  numero = parseFloat(prompt("Introduce otro número (introduce un número negativo para finalizar):"));
}

// Verificamos que se haya introducido al menos un número antes de mostrar los resultados
if (conteo > 0) {
  // Calculamos la media dividiendo la suma entre el conteo
  const media = suma / conteo;

  // Mostramos los resultados
  alert(`La suma de los números introducidos es: ${suma}`);
  alert(`La media de los números introducidos es: ${media}`);
} else {
  console.log("No se introdujeron números para calcular la suma y la media.");
}