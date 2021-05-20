const URL = 'https://leafreef.herokuapp.com/api/list/';

async function fetchSensorData() {
    const response = await fetch(URL);
    const data = await response.json();
    const { temperature, humidity } = data;

    document.getElementById('temp').textContent = temperature + '°C';
    document.getElementById('hum').textContent = humidity + '%';
}

fetchSensorData();
setInterval(fetchSensorData, 5000);
