export const getData = async (url, endPoint) => {
  try {
    const full_url = url + endPoint;
    const response = await fetch(full_url);
    console.log(full_url);
    // console.log(response);
    const response_json = await response.json();
    return response_json;
  } catch (error) {
    return error.toString();
  }
};
