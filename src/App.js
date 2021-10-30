
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Header/Header';
import DeliveryMan from './Pages/DeliveryMan/DeliveryMan';
import Man from './Pages/Man/Man';
import DeliveryUpdate from './Pages/DeliveryUpdate/DeliveryUpdate';

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
          <Route path='/users/update/:id'>
            <DeliveryUpdate></DeliveryUpdate>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
