
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Header/Header';
import DeliveryMan from './Pages/DeliveryMan/DeliveryMan';
import Man from './Pages/Man/Man';
// import DeliveryUpdate from './Pages/DeliveryUpdate/DeliveryUpdate';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Food from './Pages/Home/Food/Food';
import AddFood from './Pages/Home/AddFood/AddFood';
import Single from './Pages/Single/Single';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/food">
            <Food></Food>
          </Route>
          <Route path='/deliveryman'>
            <DeliveryMan></DeliveryMan>
          </Route>
          <Route path='/man'>
            <Man></Man>
          </Route>
          <Route path='/update/:id'>
            <Single></Single>
          </Route>
          <Route path="/add-food">
            <AddFood></AddFood>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}



export default App;
