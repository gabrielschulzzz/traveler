import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from "./styles/global";

import { City } from "./pages/City";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CitiesList } from "./pages/CitiesList";
import { PlacePage } from "./pages/PlacePage";
import { DashboardCityList } from "./pages/DashboardCityList";
import { DashboardCity } from "./pages/DashboardCity";
import { DashboardAddCity } from './pages/DashboardAddCity';
import { DashboardEditCity } from './pages/DashboardEditCity';
import { DashboardEditPlace } from './pages/DashboardEditPlace';
import { DashBoardAddPlace } from './pages/DashboardAddPlace';
import ScrollToTop from './components/ScrollToTop';
import { CreateAccount } from './pages/CreateAccount';
import { UserDashboard } from './pages/UserDashboard';

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/dashboard' component={UserDashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={CreateAccount} />
        <Route exact path='/dashboard' component={DashboardCityList} />
        <Route exact path='/dashboard/add-city' component={DashboardAddCity} />
        <Route exact path='/dashboard/city/:city/add-place' component={DashBoardAddPlace} />
        <Route exact path='/dashboard/city/:city' component={DashboardCity} />
        <Route exact path='/dashboard/city/:city/edit' component={DashboardEditCity} />
        <Route exact path='/dashboard/city/:city/place/:place/edit' component={DashboardEditPlace} />
        <Route exact path='/cities/' component={CitiesList} />
        <Route exact path='/cities/:city' component={City} />
        <Route path='/cities/:city/:place' component={PlacePage} />
      </Switch>
    </>
  );
}

export default App;
