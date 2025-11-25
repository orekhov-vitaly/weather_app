export interface WeatherAppSliceState {
  data: WeatherAppApiResponse[]
  error: string | undefined
  status: "default" | "loading" | "success" | "error"
}

export interface WeatherAppApiResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: "Clouds"
      description: "broken clouds"
      icon: "04n"
    },
  ]
  base: "stations"
  main: {
    temp: number
    feels_like: number
    temp_min: 278.21
    temp_max: 280.01
    pressure: 1016
    humidity: 83
    sea_level: 1016
    grnd_level: 1012
  }
  visibility: 10000
  wind: {
    speed: 2.57
    deg: 310
  }
  clouds: {
    all: 75
  }
  dt: 1764090846
  sys: {
    type: 2
    id: 2075535
    country: "GB"
    sunrise: 1764056116
    sunset: 1764086409
  }
  timezone: 0
  id: 2643743
  name: "London"
  cod: 200
}
