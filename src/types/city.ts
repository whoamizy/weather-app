export interface City {
  location: Location
  current: Current
  forecast: {
    forecastday: ForecastDay[]
  }
}

interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

interface Current {
  temp_c: number
  is_day: number
  condition: Condition
  wind_kph: number
  precip_mm: number
  humidity: number
  feelslike_c: number
  uv: number
}

export interface Condition {
  text: string
  icon: string
}

export interface ForecastDay {
  date: string
  day: {
    maxtemp_c: number
    mintemp_c: number
    avgtemp_c: number
    condition: Condition
  }
}
