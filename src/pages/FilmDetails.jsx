import React from "react";

class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: null
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.filmid}`)
      .then((res) => res.json())
      .then((data) => this.setState({ film: data }));
  }

  render() {
    return (
      <div className="vh-100">
        <div className="row justify-content-center">
          <div className="card col-7 mb-10 p-5">
            <h2>{this.state.film?.title}</h2>
            <h4>
              {this.state.film?.original_title} :{" "}
              {this.state.film?.original_title_romanised}
            </h4>
            <ul class="list-group list-group-flush p-2">
              <li class="list-group-item">{this.state.film?.description}</li>
              <li class="list-group-item">
                <strong>Director:</strong> {this.state.film?.director}
              </li>
              <li class="list-group-item">
                <strong>Release Date:</strong> {this.state.film?.release_date}
              </li>
              <li class="list-group-item">
                <strong>Run Time:</strong> {this.state.film?.running_time} min
              </li>
              <li class="list-group-item">
                <strong>Rotten Tomatoes Score:</strong>{" "}
                {this.state.film?.rt_score}%
              </li>
            </ul>
            <button
              className="btn btn-back mt-5"
              onClick={() => this.props.history.push("/films")}
            >
              back to Films
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilmDetails;
