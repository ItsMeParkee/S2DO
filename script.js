document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('light-mode');
};

document.getElementById('loginBtn').onclick = () => {
  document.getElementById('userEmail').innerText = "you@example.com";
  document.getElementById('subscriberCount').innerText = "1,204";
  document.getElementById('viewCount').innerText = "589,321";
  drawChart();
};

function drawChart() {
  const ctx = document.getElementById('videoChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Videos', 'Shorts'],
      datasets: [{
        label: 'Content Count',
        data: [35, 84],
        backgroundColor: ['#FF5252', '#00E676']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
