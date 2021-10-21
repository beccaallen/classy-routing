import React from "react";
import { Link } from "react-router-dom";

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then(data => this.setState({locations: data}));
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-4 ">
          <ul>
            {this.state.locations.map((location) => (
              <li className="card" key={`person-item-${location.id}`}>
                <div className="card-body row d-flex justify-content-center">
                  <h3>{location.name}</h3>
                  <Link
                    to={`/locations/${location.id}`}
                    className="btn btn-info"
                  >
                    Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Locations;
