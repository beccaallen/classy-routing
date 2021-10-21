import React from "react";
import { Link } from "react-router-dom";

class Films extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            films: []
        }
    }

componentDidMount () {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => this.setState({films: data}))

}

    render () {

        return (
    
            <div className="body row justify-content-center">
            <div className="col-6">
                <ul className="userid">
                        {this.state.films.map(film => (
                            <li className= "card" key={`film-item-${film.id}`}>
                               <div className="card-body row d-flex">
                                   <h3>{film.title}</h3>
                                    <p>{film.description}</p>
                                    <Link to={`/films/${film.id}`} className="btn">Details</Link>
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
export default Films