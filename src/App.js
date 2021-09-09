import logo from './logo.svg';
import './App.css';
import Counter from './component/FunctionalComponents';
import ReduxThunk from './component/ReduxThunk';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/counter' component={Counter}/>
          <PrivateRoute exact path='/thunk' component={ReduxThunk} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
