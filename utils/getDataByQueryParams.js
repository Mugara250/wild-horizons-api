export const getDataByQueryParams = (
  queryParamsObj,
  data
) => {
    const {country, continent, is_open_to_public} = queryParamsObj;
    if (country) {
        data = data.filter(destination => destination.country.toLowerCase() === country.toLowerCase());
    }
    if (continent) {
        data = data.filter(destination => destination.continent.toLowerCase() === continent.toLowerCase());
    }
    if (is_open_to_public) {
        data = data.filter(destination => destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase()));
    }
    return data;
};
