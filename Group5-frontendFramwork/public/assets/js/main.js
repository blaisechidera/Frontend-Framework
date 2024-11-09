// Toggle sidebar visibility on button click
document.getElementById("sidebarToggle").addEventListener("click", function() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("d-block");
});

document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('graphcard').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line', // Line chart type
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // X-axis labels
      datasets: [{
        label: "Today's trends",
        data: [12, 19, 3, 5, 2, 3, 12], // Y-axis data values
        borderColor: '#007bff', // Line color
        backgroundColor: 'rgba(0, 123, 255, 0.2)', // Area color (light blue)
        fill: true, // To fill the area under the line (creating the curved effect)
        tension: 0.4, // Smooth curve for the line
        pointBackgroundColor: '#007bff', // Point color
        pointRadius: 5, // Point size
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true, // Makes the chart responsive to screen size
      maintainAspectRatio: false // If you want to control the aspect ratio
    }
  });
});