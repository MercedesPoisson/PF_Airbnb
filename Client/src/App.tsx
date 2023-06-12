import './App.css'
import { Switch, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Route>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Route>
      {/* <Home /> */}
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/property/:id" exact component={Detail} */}
      {/* <Route path="/post" exact component={Form} /> */}

    </div>
  );
}

export default App;
