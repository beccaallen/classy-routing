import React from "react"

class LocationDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: null
    }
  }

componentDidMount (){
  fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.locationid}`)
  .then(res => res.json())
  .then(data => this.setState({location: data}))
}
  render () {

    return (
        <div className="vh-100 ">
          <div className="row justify-content-center">
          <div className="card col-7 p-5 ">
            <ul class="list-group list-group-flush p-5">
              <li class="list-group-item"> <h2>{this.state.location?.name}</h2></li>
              <li class="list-group-item"><strong>Climate:</strong> {this.state.location?.climate}</li>
              <li class="list-group-item"><strong>Terrain:</strong> {this.state.location?.terrain}</li>
              <li class="list-group-item"><strong>Surface Water:</strong> {this.state.location?.surface_water}%</li>
            </ul>
            <button
              className="btn btn-back mt-5"
              onClick={() => this.props.history.push("/locations")}
            >
              back to Locations
            </button>
          </div>
                </div>
        </div>
    )

  }

}

export default LocationDetail