import Input from "components/Input/Input"
import {
  City,
  Temp,
  WeatherAppWrapper,
  WeatherForm,
  WeatherHistoryBlock,
  WeatherHistoryData,
  WeatherHistoryImage,
  WeatherHistoryWrapper,
  Error,
  ErrorTitle,
  ErrorText,
} from "./styles"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherAppActions,
  weatherAppSelectors,
} from "store/redux/weatherApp/weatherAppSlice"
import Image from "components/Image/Image"
import { useFormik } from "formik"
import { WeatherFormValues } from "./types"

function WeatherApp() {
  const { data, error, status } = useAppSelector(
    weatherAppSelectors.weatherData,
  )

  const dispatch = useAppDispatch()

  const getWeather = (city: string) => {
    dispatch(weatherAppActions.getWeather(city))
  }

  const clearHistory = () => {
    dispatch(weatherAppActions.clearHistory())
  }

  const formik = useFormik({
    initialValues: {
      city: "",
    } as WeatherFormValues,

    // validationSchema: schema,
    validateOnChange: false,

    onSubmit: (value: WeatherFormValues): void => {
      getWeather(value.city)
    },
  })

  return (
    <WeatherAppWrapper>
      <WeatherForm onSubmit={formik.handleSubmit}>
        <Input
          name="city"
          id="city"
          placeholder="Enter city name"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        <Button name="Search" type="submit" />
      </WeatherForm>
      {status === "error" && (
        <Error>
          <ErrorTitle>API Error</ErrorTitle>
          <ErrorText>{error}</ErrorText>
        </Error>
      )}
      <WeatherHistoryWrapper>
      {data.length > 0 && <Button name="Clear history" onClick={clearHistory} />}
        {data.length > 0 &&
          <WeatherHistoryBlock>
            <WeatherHistoryData>
              <Temp>{(data[0]?.main.temp - 273.15).toFixed(0)}°</Temp>
              <City>{data[0]?.name}</City>
            </WeatherHistoryData>
            <WeatherHistoryImage>
              <Image
                src={`https://openweathermap.org/img/wn/${data[0]?.weather[0].icon}@2x.png`}
              />
            </WeatherHistoryImage>
          </WeatherHistoryBlock>
        }
      </WeatherHistoryWrapper>
    </WeatherAppWrapper>
  )
}

export default WeatherApp
