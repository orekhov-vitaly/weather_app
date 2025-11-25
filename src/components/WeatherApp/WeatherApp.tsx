import Input from "components/Input/Input"
import { City, Temp, WeatherAppWrapper, WeatherForm, WeatherHistoryBlock, WeatherHistoryData, WeatherHistoryImage, WeatherHistoryWrapper } from "./styles"
import Button from "components/Button/Button"

function WeatherApp() {
  return (
    <WeatherAppWrapper>
      <WeatherForm>
        <Input
          name="city"
          id="city"
          placeholder="Enter city name"
          value=""
          onChange={() => {}}
        />
        <Button name="Search" onClick={() => {}} />
      </WeatherForm>
      <WeatherHistoryWrapper>
        <WeatherHistoryBlock>
          <WeatherHistoryData>
            <Temp>18°</Temp>
            <City>Colrado</City>
          </WeatherHistoryData>
          <WeatherHistoryImage></WeatherHistoryImage>
        </WeatherHistoryBlock>
        <WeatherHistoryBlock>
          <WeatherHistoryData>
            <Temp>18°</Temp>
            <City>Colrado</City>
          </WeatherHistoryData>
          <WeatherHistoryImage></WeatherHistoryImage>
        </WeatherHistoryBlock>
      </WeatherHistoryWrapper>
    </WeatherAppWrapper>
  )
}

export default WeatherApp
