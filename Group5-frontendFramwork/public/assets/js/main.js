// Toggle sidebar visibility on button click
document.getElementById("sidebarToggle").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("d-block");
});

// Select the profile photo by its ID and add a click event listener
document.getElementById("profilePhoto").addEventListener("click", function () {
  // Show the photo modal when the profile image is clicked
  new bootstrap.Modal(document.getElementById("photoModal")).show();
});

//Initialize the Popover
document.addEventListener("DOMContentLoaded", function () {
  var popoverTrigger = document.querySelector('[data-bs-toggle="popover"]');
  var popover = new bootstrap.Popover(popoverTrigger, {
    trigger: "manual",
  });

  // Show popover when clicked
  popoverTrigger.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link action
    popover.toggle(); // Toggle the popover visibility
  });

  // Close popover when clicking outside
  document.addEventListener("click", function (e) {
    if (
      popoverTrigger &&
      !popoverTrigger.contains(e.target) &&
      document.querySelector(".popover") &&
      !document.querySelector(".popover").contains(e.target)
    ) {
      popover.hide();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var createTaskModal = new bootstrap.Modal(
    document.getElementById("createTaskModal")
  );
});

const modal = document.getElementById("createTaskModal");

modal.addEventListener("show.bs.modal", () => {
  document.body.classList.add("modal-open-custom");
});

modal.addEventListener("hidden.bs.modal", () => {
  document.body.classList.remove("modal-open-custom");
});

//Line graph chart
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("graphcard").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line", // Line chart type
    data: {
      labels: ["8:00", "10:00", "12:00", "14:00", "16:00", "20:00", "22:00"], // X-axis labels
      datasets: [
        {
          label: "Today's trends",
          data: [12, 19, 3, 5, 2, 3, 12], // Y-axis data values
          borderColor: "#007bff", // Line color
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Area color (light blue)
          fill: true, // To fill the area under the line (creating the curved effect)
          tension: 0.4, // Smooth curve for the line
          pointBackgroundColor: "#007bff", // Point color
          pointRadius: 10, // Point size
        },
        {
          label: "Yesterday",
          data: [8, 16, 3, 6, 4, 2, 10], // Y-axis data values
          borderColor: "#696969 ", // Line color
          backgroundColor: "rgba(128, 128, 128, 0.2)", // Area color (light grey)
          fill: true, // To fill the area under the line (creating the curved effect)
          tension: 0.4, // Smooth curve for the line
          pointBackgroundColor: "#A9A9A9", // Point color
          pointRadius: 10, // Point size
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      responsive: true, // Makes the chart responsive to screen size
      maintainAspectRatio: false, // If you want to control the aspect ratio
    },
  });
});
