<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter zipcode"
          class="search-input"
          @keyup.enter="search"
        />
        <button @click="search" class="search-button">
          Search
        </button>
      </div>
    </div>

    <main class="main-section">
      <div v-if="weatherData" class="weather">
        <h2>{{ weatherData.name }}</h2>
        <div class="temp-box">
          <img :src="iconUrl" alt="Weather Icon" class="weather-icon" />
          <span class="main-desc">{{ weatherData.weather[0].description }}</span>
          <p class="temperature">{{ temperature }}°</p>
        </div>
  
      </div>
      <div v-else></div>

      <div v-if="hourlyForecast.length" class="forecast">
        <div class="forecast-cards">
          <div
            v-for="(forecast, index) in hourlyForecast"
            :key="index"
            class="mobile-margin"
          >
            <div>
              <p class="time">{{ forecast.time }}</p>
              <div class="forcast-desc">
                <p class="desc">{{ forecast.description }}</p>
                <img :src="`http://api.openweathermap.org/img/w/${forecast.icon}.png`" alt="Weather Icon" />
              </div>
              <p>
                <span class="temp-max">{{ forecast.temp_max }}°</span>/<span class="temp-min">{{ forecast.temp_min }}°</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div v-if="dailyForecast.length" class="forecast">
      <div class="forecast-cards">
        <div
          v-for="(forecast, index) in dailyForecast"
          :key="index"
          class="mobile-margin"
        >
          <p class="date">{{ forecast.date }}</p>
          <div class="forcast-desc">
            <p class="desc">{{ forecast.description }}</p>
            <img :src="`http://api.openweathermap.org/img/w/${forecast.icon}.png`" alt="Weather Icon" />
          </div>
          <p>
            <span class="temp-max">{{ forecast.temp_max }}°</span>/<span class="temp-min">{{ forecast.temp_min }}°</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const apikey = "85943dc7e40cb64bdc65d6e017c0031b";

export default {
  name: "App",
  data() {
    return {
      city: "",
      country: "US",
      weatherData: null,
      hourlyForecast: [],
      dailyForecast: [],
    };
  },
  computed: {
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp)
        : null;
    },
    iconUrl() {
      return this.weatherData
        ? 
`http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  mounted() {
    this.getCurrentLocationWeather();
  },
  methods: {
    async getCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `ht
tp://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=imperial`;
          await this.getWeatherData(url);
        });
      }
    },
    async getWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
        // get forecast data
        await this.getForecast(this.weatherData.name);
      } catch (error) {
        console.error("Error geting weather data:", error);
      }
    },
    async getForecast(city, country) {
      const urlcast =
 `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apikey}&units=imperial`;
      try {
        const response = await axios.get(urlcast);
        const forecast = response.data;
        this.hourForecast(forecast);
        this.dayForecast(forecast);
      } catch (error) {
        console.error("Error geting forecast data:", error);
      }
    },
    async search() {
      if (!this.city) return;
      try {
        const urlsearch = 
`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${apikey}&units=imperial`;
        const response = await axios.get(urlsearch);
        this.weatherData = response.data;
        // get forecast data
        await this.getForecast(this.weatherData.name);
      } catch (error) {
        console.error("Error geting weather data:", error);
      }
      this.city = "";
    },
    hourForecast(forecast) {
      this.hourlyForecast = [];
      for (let i = 0; i < 4; i++) {
        const date = new Date(forecast.list[i].dt * 1000);
        this.hourlyForecast.push({
          time: date
            .toLocaleTimeString("en-US")
            .replace(":00", ""),
          temp_max: Math.floor(forecast.list[i].main.temp_max),
          temp_min: Math.floor(forecast.list[i].main.temp_min),
          description: forecast.list[i].weather[0].description,
          icon: forecast.list[i].weather[0].icon,
        });
      }
    },
    dayForecast(forecast) {
      this.dailyForecast = [];
      for (let i = 8; i < forecast.list.length; i += 8) {
        const date = new Date(forecast.list[i].dt * 1000);
        this.dailyForecast.push({
          date: date.toDateString("en-US"),
          temp_max: Math.floor(forecast.list[i].main.temp_max),
          temp_min: Math.floor(forecast.list[i].main.temp_min),
          description: forecast.list[i].weather[0].description,
          icon: forecast.list[i].weather[0].icon,
        });
      }
    },
  },
};
</script>

<style>
/* styles.css */
@import url(
'https://fonts.googleapis.com/css2?family=Zen+Dots:wght@300;400;500;700&display=swap');

/* General Styles */
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Zen+Dots', sans-serif;
    background-color: #f8fafa;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.header h1 {
    font-family: "Zen Dots", serif;
    font-size: 2.5rem;
    color: #1B4965;
    margin: 0;
}

/* Search Bar */
.search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.search-input {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
    width: 60%;
    margin-right: 1rem;
}

.search-button {
    font-size: 1rem;
    background-color: #1B4965;
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-button:hover {
    background-color: #2A9D8F;
}

/* Weather Widget */
.weather {
    text-align: center;
    color: #264653;
    margin-bottom: 3rem;
    padding: 2rem;
}

.weather h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #264653;
}

.weather-icon {
    width: auto;
    height: auto;
    border-radius: 10%;
    background-color: rgba(240, 248, 255, 0.5);

}

.temp-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.temperature {
    font-size: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.main-desc {
    display: inline-block;

    font-size: 1.8rem;
    color: #264653;
}

/* Forecast */
.forecast {
    margin-bottom: 3rem;
}

.cast-header {
    font-size: 1.5rem;
    color: #fff;
    background-color: #BEE9E8;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px black;
    width: 50%;
}

.forecast-cards {
  display: flex;
  justify-content: space-between;
  padding: 1.4rem;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 24px );
  -webkit-backdrop-filter: blur( 24px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.time {
  font-weight: 700;
  color: #2A9D8F;
  margin-bottom: 0.5rem;
}

.temp-max,
.temp-min {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #1B4965;
}

.desc {
  color: #1B4965;
}

.date {
  font-weight: 700;
  color: #2A9D8F;
}

.forcast-desc {
  display: flex;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: stretch;
    }

    .search-bar {
        flex-direction: column;
    }

    .search-input,
    .search-button {
        width: 100%;
        border-radius: 0.5rem;
    }

    .search-input {
        margin-right: 0;
        margin-bottom: 1rem;
    }

    .weather-icon {
        width: 100px;
        height: 100px;
    }

    .temperature {
        font-size: 2.5rem;
    }

    .forecast-cards {
      flex-direction: column;
    }

    .mobile-margin {
      margin-bottom: 2.6rem;
    }

    .cast-header {
        font-size: 1.2rem;
    }
}
</style>
