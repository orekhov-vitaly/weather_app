import { WeatherAppWrapper } from "components/WeatherApp/styles"
import {
  City,
  HistoryWrapper,
  Temp,
  WeatherHistoryBlock,
  WeatherHistoryData,
  WeatherHistoryImage,
  WeatherHistoryWrapper,
} from "./styles"
import Image from "components/Image/Image"
import { useAppSelector } from "store/hooks"
import { weatherAppSelectors } from "store/redux/weatherApp/weatherAppSlice"

function History() {
  const { data } = useAppSelector(weatherAppSelectors.weatherData)
  const resultWeathers = data.map(item => {
    return (
      <WeatherHistoryBlock>
        <WeatherHistoryData>
          <Temp>{(item?.main.temp - 273.15).toFixed(0)}°</Temp>
          <City>{item?.name}</City>
        </WeatherHistoryData>
        <WeatherHistoryImage>
          <Image
            src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`}
          />
        </WeatherHistoryImage>
      </WeatherHistoryBlock>
    )
  })
  return (
    <HistoryWrapper>
      <WeatherAppWrapper>
        <WeatherHistoryWrapper>{resultWeathers}</WeatherHistoryWrapper>
      </WeatherAppWrapper>
    </HistoryWrapper>
  )
}

export default History
