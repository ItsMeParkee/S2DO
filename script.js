document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('light-mode');
};

// Simulate dynamic data
document.getElementById('subscriberCount').innerText = "1,204";
document.getElementById('userEmail').innerText = "user@gmail.com";

// Simulated chart
const ctx = document.getElementById('videoChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Videos', 'Shorts'],
    datasets: [{
      label: 'Content Count',
      data: [35, 84],
      backgroundColor: ['#ff3d00', '#00e676']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
