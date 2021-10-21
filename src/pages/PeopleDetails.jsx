import React from "react";

class PeopleDetails extends React.Component {
   
  constructor(props){
    super(props)
    this.state={
      people: null
    }
  }

componentDidMount(){
  fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.peopleid}`)
  .then(res => res.json())
  .then(data => this.setState({people:data}))
}
  
render () {
  return (

<div className="vh-100">
<div className="row justify-content-center">
<div className="card col-7 p-5">
        <h2>{this.state.people?.name}</h2>
        <h4>
          {this.state.people?.gender}
        </h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Age:</strong> {this.state.people?.age}</li>
          <li class="list-group-item"><strong>Eye Color:</strong> {this.state.people?.eye_color}</li>
          <li class="list-group-item"><strong>Hair Color:</strong> {this.state.people?.hair_color}</li>
        </ul>
        <button
              className="btn btn-back mt-5"
              onClick={() => this.props.history.push("/people")}
            >
              back to People
            </button>      </div>
</div>
</div>
  )

}
}

export default PeopleDetails
