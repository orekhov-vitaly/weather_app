import Input from "components/Input/Input"
import { WeatherAppWrapper, WeatherForm } from "./styles"
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
    </WeatherAppWrapper>
  )
}

export default WeatherApp
