import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./style.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import Locations from "./pages/Locations";
import FilmDetails from "./pages/FilmDetails";
import PeopleDetails from "./pages/PeopleDetails";
import LocationDetail from "./pages/LocationDetail";
import Footer from "./components/Footer";



class App extends React.Component { 
    constructor(props) {
        super(props)
    }
    render() {

        return (

            <BrowserRouter>
            <Navbar />
            <main className="container">
              <Switch>
                <Route exact path="/" component={Home}/>

                <Route exact path="/films" component={Films}/>
                 
                <Route exact path="/films/:filmid" component={FilmDetails}/>
               
                <Route exact path="/people" component={People}/>
                 
                <Route exact path="/people/:peopleid" component={PeopleDetails}/>
                 
                <Route exact path="/locations" component={Locations}/>
                 
                <Route exact path = "/locations/:locationid" component={LocationDetail}/>
               
              </Switch>
            </main>
            <Footer />
          </BrowserRouter>
        )
    }

}

export default App