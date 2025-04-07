document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const inputValue = document.getElementById('textBox');
    const weatherInfo = document.getElementById('weatherInfo');

    searchBtn.addEventListener('click', function(event){
        event.preventDefault();
        const city = inputValue.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa88617dcb6406b442a1d622105a8b88`;
      fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(err => console.error("Fetch failed:", err));
    });


    function displayWeather(data) {
        weatherInfo.innerHTML = '';

        if(data.cod === '404'){
            const para = document.createElement('p');
            para.textContent = data.message;
            para.className = 'info';

            weatherInfo.appendChild(para);
        }
        else{
            const description = data.weather[0].description;
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15);
            const humidity = Math.round(data.main.humidity);
            const iconCode = data.weather[0].icon;

            const weatherIcon = document.createElement('img');
            weatherIcon.className = 'icon'

            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

            weatherIcon.src = iconUrl;
            weatherInfo.appendChild(weatherIcon);

            const desc = document.createElement('h2');
            desc.textContent = description;
            desc.classList = 'description';

            weatherInfo.appendChild(desc);
            
            let paras = [cityName, temperature, humidity];

            paras.forEach( function(para){
                var p = document.createElement('p');
                p.className = 'info';

                if(para === temperature){
                    p.textContent = 'Temperature : '+ para+' C';
                }

                else if(para === humidity){
                    p.textContent = "Humidity: "+para;
                }
                else{
                p.textContent = para;
                }

                weatherInfo.appendChild(p);
            })

        }
    };

  });