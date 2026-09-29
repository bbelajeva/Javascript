async function Fetchdata() {
    const url = "https://archive-api.open-meteo.com/v1/archive?latitude=45.7489&longitude=21.2087&start_date=2022-01-01&end_date=2022-01-01&hourly=temperature_2m";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
for (let i = 0; i < data.hourly.temperature_2m.length; i++) {
    console.log(`Hour ${i}: ${data.hourly.temperature_2m[i]}°C`);
  }

}
Fetchdata();

async function getWeather(lat, lon, start, end) {
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&hourly=temperature_2m,precipitation,wind_speed_10m`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data.hourly.time.length); // jābūt 168 (7 dienas)
  return data;
}
document.getElementById("submit-btn").addEventListener("click", async () => {
  const lat = document.getElementById("latitude").value;
  const lon = document.getElementById("longitude").value;
  const start = document.getElementById("start-date").value;
  const end = document.getElementById("end-date").value;

  if (!lat || !lon || !start || !end) {
    alert("Aizpildi visus laukus!");
    return;
  }

  try {
    const data = await getWeather(lat, lon, start, end);
    showTable(data);
  } catch (err) {
    console.error(err);
    document.getElementById("results").innerHTML = "<p>Kļūda ielādējot datus.</p>";
  }
});

function showTable(data) {
  const container = document.getElementById("results");
  container.innerHTML = ""; // notīra veco saturu

  const times = data.hourly.time;
  const temps = data.hourly.temperature_2m;
  const winds = data.hourly.wind_speed_10m;

  let rows = "";
  for (let i = 0; i < times.length; i++) { 
  
    if (times[i].includes("T00:00") || times[i].includes("T06:00") ||
        times[i].includes("T12:00") || times[i].includes("T18:00")) {
      const dt = new Date(times[i]).toLocaleString();
      rows += `<tr>
        <td>${dt}</td>
        <td>${temps[i]} ${data.hourly_units.temperature_2m}</td>
        <td>${winds[i]} ${data.hourly_units.wind_speed_10m}</td>
      </tr>`;
    }
  }

  container.innerHTML = `
    <table>
      <thead>
        <tr><th>Datums</th><th>Temperatūra</th><th>Vēja ātrums</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}