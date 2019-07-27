import React, { Component } from 'react';

class RandomBeer extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  displayRandomBeer = () => {
    
    // console.log(this.props)
    let beersArrayLength = this.props.allTheBeers.length;
    let randomIndex = Math.floor((Math.random() * (beersArrayLength)));
    let randomBeer = this.props.allTheBeers[randomIndex];
    // console.log(beersArrayLength);
    // console.log(randomIndex);
    console.log(randomBeer);
    console.log(randomBeer.name);

    return(
      <div key={randomBeer._id}>
        <div>
          {randomBeer.name}
        </div>
        <div>
          {randomBeer.tagline}
        </div>
        <img src={randomBeer.image_url} alt='beer image'/>
      </div>
    )
  }


  render() {

    if(this.props.ready)
    return(
      <div>
        <h2>Hello this is the Random Beer Page</h2>
        {this.displayRandomBeer()}
      </div>
    )
    else
    return (<h2>Loading...</h2>)


  }
}

export default RandomBeer;