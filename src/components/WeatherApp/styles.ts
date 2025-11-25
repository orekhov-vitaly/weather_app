import styled from "@emotion/styled"

export const WeatherAppWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  display: flex;
  flex-direction: column;
  gap: 120px;
`

export const WeatherForm = styled.div`
  display: flex;
  gap: 14px;
`

export const WeatherHistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const WeatherHistoryBlock = styled.div`
    height: 180px;
    padding: 22px 36px;
    background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
    backdrop-filter: blur(4px);
    border-radius: 20px;

`

export const WeatherHistoryData = styled.div`
    color: #fff;
`

export const Temp = styled.div`
    font-size: 57px;
    font-weight: 500;
    line-height: 1;
`

export const City = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
`

export const WeatherHistoryImage = styled.div``
