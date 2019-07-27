import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {
  constructor(props){
    super(props);
    this.state = { 
      newImageUrl: "", 
      newName: "",
      newTagline: "",
      newDescription: "",
      newFirstBrewed: "",
      newBrewersTips: "",
      newAttenuationLevel: "",
      newContributedBy: ""
    };
  }



  handleFormSubmit = (event) => {
    event.preventDefault();

    axios.post("https://sample-api-ih.herokuapp.com/new", {
      // image_url: this.state.newImageUrl,
      name: this.state.newName,
      tagline: this.state.newTagline,
      description: this.state.newTagline,
      first_brewed: this.state.newFirstBrewed,
      brewers_tips: this.state.newBrewersTips,
      attenuation_level: this.state.newAttenuationLevel,
      contributed_by: this.state.newContributedBy,

      })
    .then( () => {
        // this.props.getData();
        // this function updates the list in ProjectIndex.js
        this.setState({
          // newImageUrl: "",
          newName: "",
          newTagline: "",
          newDescription: "",
          newFirstBrewed: "",
          newBrewersTips: "",
          newAttenuationLevel: "",
          newContributedBy: "",
        });
        //This line makes the magic happen
        this.props.history.push('/allbeers')
    })
    .catch( error => console.log(error) )
  }

  //What is this!!!!!!!!
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  // handleFormSubmit(e){

  // }

  render() {
    return (
      <div>
        Hello New Beer Page

        <div className="add-beer-form">
          <form onSubmit={this.handleFormSubmit}>

{/*             
            <div>
              <label>ImageUrl:</label>
              <input type="text" name="newImageUrl" value={this.state.newImageUrl} onChange={ e => this.handleChange(e)}/>
            </div>
             */}
            <div>
              <label>Name:</label>
              <input name="newName" value={this.state.newName} onChange={ e => this.handleChange(e)} />
            </div>
            <div>
              <label>Tagline:</label>
              <input type="text" name="newTagline" value={this.state.newTagline} onChange={ e => this.handleChange(e)}/>
            </div>
            <div>
              <label>Description:</label>
              <textarea name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)} />
            </div>
            <div>
              <label>First Brewed:</label>
              <input type="text" name="newFirstBrewed" value={this.state.newFirstBrewed} onChange={ e => this.handleChange(e)} />
            </div>
            <div>
              <label>Brewers Tips:</label>
              <textarea name="newBrewersTips" value={this.state.newBrewersTips} onChange={ e => this.handleChange(e)} />
            </div>
            <div>
              <label>Attenuation Level:</label>
              <input type="number" name="newAttenuationLevel" value={this.state.newAttenuationLevel} onChange={ e => this.handleChange(e)} />
            </div>
            <div>
              <label>Contributor:</label>
              <input type="text" name="newContributedBy" value={this.state.newContributedBy} onChange={ e => this.handleChange(e)} />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>


      </div>
    );
  }
}

export default NewBeer;