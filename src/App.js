import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Router>
          <Header/>
          <Switch>
              <Route path="/" exact component={ProductList}/>
              <Route path="/product/:productId" exact component={ProductDetail}/>
              <Route>404 Not Found!</Route>
          </Switch>


      </Router>

    </>
  );
}

export default App;
