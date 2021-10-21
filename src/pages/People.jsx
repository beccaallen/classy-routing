import React from "react";
import { Link } from "react-router-dom";

class People extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount () {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(data => this.setState({people:data}))
    }


render () {

    return (
        <div className="body row justify-content-center">
            <div className="col-lg-3">
                <ul>
                {this.state.people.map(person => (
                            <li className= "card row" key={`person-item-${person.id}`}>
                               <div className="card-body">
                                   <h3>{person.name}</h3>
                                    <Link to={`/people/${person.id}`} className="btn btn-info">Details</Link>
                               </div>
                            </li>
                        )
                        )}
                </ul>
            </div>
        </div>
    )
}
}

export default People