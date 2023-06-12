import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
      {/* <Home /> */}
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/property/:id" exact component={Detail} */}
      {/* <Route path="/post" exact component={Form} /> */}

    </div>
  );
}

export default App;
