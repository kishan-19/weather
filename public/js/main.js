const searchIcone = document.getElementsByClassName('search_icon');
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector(".middle_layer")


// get current day

const getCurrentDate = () => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    const days = document.getElementById('day');

    days.innerText = day;

}
getCurrentDate();

// get current time


const getCurrentTime = () => {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();

    var month = months[now.getMonth() + 1];
    var date = now.getDate();

    var period = "Am";

    if (hours > 11) {
        period = "Pm";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    const today_date = document.getElementById('today_date');
    let live_time = document.getElementById('live_time');
    live_time.innerText = `${hours}:${mins} ${period}`
    today_date.innerText = `${date} ${month}`;

}
getCurrentTime();


const getInfo = async (event) => {
    event.preventDefault();// page are not reference
    let cityVal = cityName.value;
   var apiData = null;
    if (cityVal === "") {
        city_name.innerHTML = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://localhost:3000/weather/api/${cityVal}`
            const response = await fetch(url);
           apiData = await response.json();

            temp_real_val.innerText = apiData[0].temp;
            const tempMood = apiData[0].weather_main;
            const apiDataCity = `${apiData[0].name},${apiData[0].country}`;
            city_name.innerHTML=apiDataCity.toLocaleUpperCase();

            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fa fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fa fa-cloud' style='color:#009ad8;'>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fa fa-cloud-rain' style='color:#a4b0be;'>";
            } else {
                temp_status.innerHTML =
                    "<i class='fa fa-cloud' style='color:#f1f2f6'>";
            }
            datahide.classList.remove('data_hide');

        } catch {
            // city_name.innerHTML = `Plz enter the city name properly`;
            city_name.innerHTML = `${apiData.message}`;

            datahide.classList.add('data_hide');

        }
    }
}

submitBtn.addEventListener('click', getInfo);

