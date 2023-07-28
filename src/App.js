import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./signup";
import Signin from "./Signin";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
           <Route exact path='/'>
            <Home />
           </Route>
           <Route exact path='/Signup'>
            <Create />
           </Route>
           <Route exact path='/Signin'>
            <Signin />
           </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
  

}

export default App;
