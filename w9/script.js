function getWeather() {

    let city = document.getElementById("city").value.toLowerCase();

    document.getElementById("result").innerHTML = "Loading...";

    fetch("data.json")
    .then(response => response.json())
    .then(data => {

        if (data[city]) {
            document.getElementById("result").innerHTML =
                `<div class="card p-3 shadow">
                    <h4>${city.toUpperCase()}</h4>
                    <p>Temperature: ${data[city].temp}°C</p>
                    <p>Humidity: ${data[city].humidity}%</p>
                    <p>Condition: ${data[city].condition}</p>
                </div>`;
        } else {
            document.getElementById("result").innerHTML =
                `<div class="alert alert-danger">City not found</div>`;
        }

    })
    .catch(error => {
        document.getElementById("result").innerHTML = "Error loading data";
    });
}