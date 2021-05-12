import NavBar from './components/navbar'
import {BrwoserRouter, Switch, Route} from 'react-router-dom'

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
