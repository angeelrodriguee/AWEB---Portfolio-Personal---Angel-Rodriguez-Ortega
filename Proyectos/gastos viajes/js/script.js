function calcularGastos() {
    // Obtener los valores de los campos
    let gastoComida = parseFloat(document.getElementById('gastoComida').value) || 0;
    let gastoAlojamiento = parseFloat(document.getElementById('gastoAlojamiento').value) || 0;
    let otrosGastos = parseFloat(document.getElementById('otrosGastos').value) || 0;

    // Sumar los gastos
    let total = gastoComida + gastoAlojamiento + otrosGastos;

    // Mostrar el resultado
    document.getElementById('total').textContent = total.toFixed(2);
}