const fetchFunc = async (url, method, body) => {
  let apiResult = await fetch(
    `${url}`,
    {
      method: method,
      body: body
    }
  );

  apiResult = await apiResult.json();
  return apiResult
};

export const getWeatherApi = async (param) => {
  let url = `https://api.weatherbit.io/v2.0/current?city=${param.cityName}&country=${param.country}&key=${env.API_KEY}`;

  try {
    let result = await fetchFunc(url, 'GET', null);
    return result  
  } catch (err) {
    return err;
  }
}