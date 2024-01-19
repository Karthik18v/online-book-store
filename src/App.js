import { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./components/Home/index"
import Cart from "./components/Cart";

class App extends Component{
  render() {
    return (
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
