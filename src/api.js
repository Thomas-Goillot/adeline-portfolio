import axios from 'axios';

export async function fetchPortfolios() {
  const { data } = await axios.get('/data/portfolios.json');
  return data;
}

export async function fetchPortfolioById(id) {
  const { data } = await axios.get('/data/portfolios.json');
  return data.find((p) => p.id === parseInt(id, 10));
}
