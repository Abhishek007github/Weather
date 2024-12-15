async function weather() {

    const search = document.querySelector("#city");
    const weatherIcon = document.querySelector(".weather-icon");
    const ctemp = document.querySelector(".ctemp");
    const showCity = document.querySelector(".city");
    const humidity = document.querySelector(".child-1");
    const wind = document.querySelector(".child-2");
    const bottom = document.querySelector(".bottom");
    const invalid = document.querySelector(".error");
    try {
        const input = search.value;
        const api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=abae33157f584641a1c165139242908&q=${input}&days=5&aqi=yes&alerts=yes
`)
        let data = await api.json();
        console.log(data);

        if (input) {
            showCity.textContent = `${data.location.name}, ${data.location.region}`;
            weatherIcon.src = `${data.current.condition.icon}`;
            ctemp.textContent = `${Math.floor(data.current.temp_c)}°C  ${data.current.condition.text}`;
            humidity.textContent = `${Math.floor(data.current.humidity)}%`;
            wind.textContent = `${Math.floor(data.current.wind_kph)} km/h`;
            search.value = "";
            invalid.style.display = "none";
            bottom.style.display = "block";
        } else {
            invalid.style.display = "block";
            bottom.style.display = "none";
        }

    } catch (error) {
        console.log("vnkfh");

    }
}

document.querySelector("#icon")
    .addEventListener("click", function () {
        weather();
    });