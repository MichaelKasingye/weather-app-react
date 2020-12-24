import React from 'react';
import './App.css';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Weather from './Pages/Weather';



function App() {

  return (
    <Router>
    <div className="App">
       <Switch>
         <Route path="/">
           <Weather />
           </Route>
       </Switch>
    </div>
    </Router>
  )
}

export default App
