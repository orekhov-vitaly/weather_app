import { WeatherAppWrapper } from "components/WeatherApp/styles"
import {
  City,
  Error,
  ErrorTitle,
  HistoryWrapper,
  Temp,
  WeatherHistoryBlock,
  WeatherHistoryData,
  WeatherHistoryImage,
  WeatherHistoryWrapper,
} from "./styles"
import Image from "components/Image/Image"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { weatherAppActions, weatherAppSelectors } from "store/redux/weatherApp/weatherAppSlice"
import { v4 } from "uuid"
import Button from "components/Button/Button"

function History() {
  const { data } = useAppSelector(weatherAppSelectors.weatherData)

  const dispatch = useAppDispatch()

  const clearHistory = () => {
    dispatch(weatherAppActions.clearHistory())
  }
  const resultWeathers = data.map(item => {
    return (
      <WeatherHistoryBlock key={v4()}>
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
        <WeatherHistoryWrapper>
          {data.length > 0 && <Button name="Clear history" onClick={clearHistory} />}
          {resultWeathers.length > 0 ? (
            resultWeathers
          ) : (
            <Error>
              <ErrorTitle>History is empty</ErrorTitle>
            </Error>
          )}
        </WeatherHistoryWrapper>
      </WeatherAppWrapper>
    </HistoryWrapper>
  )
}

export default History
