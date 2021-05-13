import NavBar from './components/navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
     </BrowserRouter>
  );
}

export default App;
