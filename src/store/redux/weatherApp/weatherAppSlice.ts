import { createAppSlice } from "store/createAppSlice"
import { WeatherAppApiResponse, WeatherAppSliceState } from "./types"
import axios from "axios"

const weatherAppInitialState: WeatherAppSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

const ApiKey = "f4faeba4674fa5218dfba0ed1007dbec"

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: weatherAppInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (city_name: string, thunkApi) => {
        try {
          const result = await axios.get<WeatherAppApiResponse>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${ApiKey}`,
          )
          console.log(result)
          return result.data
        } catch (error: unknown) {
          if (error instanceof Error) {
            return thunkApi.rejectWithValue(error.message)
          }
          return thunkApi.rejectWithValue("API Error")
        }
      },
      {
        pending: state => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state, action) => {
           state.data = [action.payload, ...state.data]
        },
        rejected: (state, action) => {
          state.error = action.payload as string
          state.status = "error"
        },
      },
    ),
    clearHistory: create.reducer(() => weatherAppInitialState)
  }),
  selectors: {
    weatherData: state => state,
  },
})

export const weatherAppActions = weatherAppSlice.actions
export const weatherAppSelectors = weatherAppSlice.selectors