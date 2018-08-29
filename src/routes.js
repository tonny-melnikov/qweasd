import HomeComponent      from './components/Home.vue';
import PortfolioComponent from './components/portfolio/Portfolio.vue';
import StocksComponent    from './components/stocks/Stocks.vue';

export const routes = [
  { path: '/', component: HomeComponent },
  { path: '/protfolio', component: PortfolioComponent },
  { path: '/stocks', component: StocksComponent }
];
