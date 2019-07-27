import React, { Component } from 'react';

class Allbeers extends Component {

  displayAllBeers () {
    return this.props.allTheBeers.map((eachBeer)=>{
        return(
          <div key={eachBeer._id}>
            <div>
               {eachBeer.name}
            </div>
            <div>
              {eachBeer.tagline}
            </div>
            <img src={eachBeer.image_url} alt="" />
          </div> 
      )
    })
  }



  render() {
    return (
      <div>
        Hello This is the All Beers Page
        {this.displayAllBeers()}
  
      </div>
    );
  }
}

export default Allbeers;