// Obtén una referencia al elemento canvas
var ctx = document.getElementById('myChart').getContext('2d');

// Crea los datos para el gráfico
var data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'crimson', // Color de fondo de las barras
        borderColor: 'white', // Color del borde de las barras
        borderWidth: 1 // Ancho del borde de las barras
    }]
};

// Crea una instancia del gráfico de barras
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});