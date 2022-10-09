import axios, { AxiosRequestConfig } from "axios";

const balanceSheetUrl =
  "https://yh-finance.p.rapidapi.com/stock/v2/get-balance-sheet";

function getOptions(symbol: string, url: string): AxiosRequestConfig<any> {
  return {
    method: "GET",
    url,
    params: { symbol },
    headers: {
      "x-rapidapi-host": "yh-finance.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };
}

async function balanceSheet(req, res) {
  const { query } = req;
  const options = getOptions(query.symbol, balanceSheetUrl);
  const { data } = await axios.get(balanceSheetUrl, options);
  res.json(data);
}

export default balanceSheet;
