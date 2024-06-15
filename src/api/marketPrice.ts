const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get(
      'https://api.diadata.org/v1/quotation/BTC',
      {},
    );
    const json = response.data;
    console.log(json);
    return json;
  } catch (ex) {
    console.error('Error fetching data:', ex);
    throw ex;
  }
}

fetchData();
