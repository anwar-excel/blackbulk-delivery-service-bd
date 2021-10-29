
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Header/Header';
import DeliveryMan from './Pages/DeliveryMan/DeliveryMan';
import Man from './Pages/Man/Man';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/deliveryman'>
            <DeliveryMan></DeliveryMan>
          </Route>
          <Route path='/man'>
            <Man></Man>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
