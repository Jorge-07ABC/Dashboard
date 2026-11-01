document.addEventListener("DOMContentLoaded", function() {
    var elementoCanvas = document.getElementById('graficoPedidos');
    if (!elementoCanvas) return;

    var ctx = elementoCanvas.getContext('2d');
    
    // Pon los números justo aquí, como se muestra abajo:
    var misValores =[12, 19, 3, 5, 22, 3, 15];
    
    new Chart(ctx, {
        type: 'line', 
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], 
            datasets: [{
                label: 'Pedidos Semanales',
                data: misValores, 
                borderColor: '#3b82f6', 
                backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                borderWidth: 3, 
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});