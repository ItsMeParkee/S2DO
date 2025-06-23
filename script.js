
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('light-mode');
};

let chartInstance;

const CLIENT_ID = 'YOUR_CLIENT_ID'; // TODO: replace with your OAuth client id
const API_KEY = 'YOUR_API_KEY'; // TODO: replace with your API key

const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(() => {
      const authInstance = gapi.auth2.getAuthInstance();
      updateSigninStatus(authInstance.isSignedIn.get());
      document.getElementById('loginBtn').onclick = () =>
        authInstance.signIn().then(loadChannelStats);
    });
}

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    loadChannelStats();
  }
}

function loadChannelStats() {
  gapi.client.youtube.channels
    .list({
      part: 'snippet,statistics',
      mine: true,
    })
    .then((response) => {
      const channel = response.result.items[0];
      document.getElementById('userEmail').innerText = channel.snippet.title;
      document.getElementById('subscriberCount').innerText = channel.statistics.subscriberCount;
      document.getElementById('viewCount').innerText = channel.statistics.viewCount;
      drawChart();
    });
}

function drawChart() {
  const ctx = document.getElementById('videoChart').getContext('2d');
  if (chartInstance) {
    chartInstance.destroy();
  }
  chartInstance = new Chart(ctx, {
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
