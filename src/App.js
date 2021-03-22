import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Navbar } from './components';
import Store from './pages/store/Store';



function App() {
  return (
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/ropa" exact component={Store} />
        </Switch>
      </Router>
  );
}

export default App;