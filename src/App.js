import NavBar from './components/navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Signup from './components/signup'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Switch>
          <Route path="/signup" component={Signup} exact />
        </Switch>
     </BrowserRouter>
  );
}

export default App;
