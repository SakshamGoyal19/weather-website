const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    const cityVal = cityname.value;

    if(cityVal == ""){
        city_name.innerHTML = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=43961b9a88dc7c2b9fb6c04e04af1cfa`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_val.innerText = arrData[0].main.temp;

            const weather_status = arrData[0].weather[0].main;
            if(weather_status == "Clear"){
                temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>"
            }
            else if(weather_status == "Clouds"){
                temp_status.innerHTML = "<i class= 'fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            if(weather_status == "Rain"){
                temp_status.innerHTML = "<i class= 'fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>"
            }

            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerHTML = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
};

submitBtn.addEventListener('click', getInfo);