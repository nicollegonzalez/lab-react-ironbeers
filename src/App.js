import React from 'react';
import './App.css';

import {Route, Link, Switch} from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import AllBeers from './components/allbeers/Allbeers';
import RandomBeer from './components/randombeer/RandomBeer';
import NewBeer from './components/newbeer/NewBeer';
import axios from 'axios'; //Need to have this here not in index.js
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';




class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      listOfBeers: [],
      ready: false,
    }
  }

  getAllBeers = () => {
    axios.get(`https://sample-api-ih.herokuapp.com/`) //Change this to our API? Yasss
    .then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data, 
        ready: true,
      })
    })
  }

  componentDidMount() {    
      this.getAllBeers();
  }
  
  render(){
    console.log(this.state.listOfBeers);
    return (
      <div className="App">
        <NavBar/>

        <Switch>
          <Route exact path="/"  component = {Home}
          />

          <Route exact path="/allbeers" //component = {AllBeers}
          render ={(props)=> <AllBeers
             {...props} 
             allTheBeers ={this.state.listOfBeers}
             ready = {this.state.ready}
            //  getData = {this.getAllProjects}
           />} 
          />

          <Route exact path="/randombeer" //component = {RandomBeer}
          render ={(props)=> <RandomBeer
             {...props} 
             allTheBeers ={this.state.listOfBeers}
             ready = {this.state.ready}
            //  getData = {this.getAllProjects}
           />} 
          />

          <Route exact path="/addnewbeer" component = {NewBeer}
          // render ={(props)=> <ProjectDetails
            //  {...props} 
            //  allTheProjects ={this.state.listOfProjects}
            //  ready = {this.state.ready}
            //  getData = {this.getAllProjects}
          //  />} 
          />
          
        </Switch>





      </div>
    );
  }
}

export default App;
