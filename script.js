
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

window.onload = function () {
  // Simulated real-time subscriber count
  document.getElementById('subscriberCount').innerText = '1,200';

  // Placeholder chart setup
  const ctx = document.getElementById('comparisonChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Videos', 'Shorts'],
      datasets: [{
        label: 'Performance',
        data: [25, 75],
        backgroundColor: ['#FF0000', '#00C853']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
};
