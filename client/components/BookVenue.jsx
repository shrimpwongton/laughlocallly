import React from 'react';

class BookVenue extends React.Component {
  constructor (props) {
    super(props);

    this.state = {}

  }

  render() {
    console.log('open props', this.props.open)
    return (
      <div className="thumbnail">
        <img src={this.props.open.photo_url} alt="..." /> 
        <div className="caption"> 
          <h3>{this.props.open.name}</h3>
          <p><strong>Date:</strong> {this.props.open.date}</p>
          <p><strong>Time:</strong> {this.props.open.start_time} </p>
          <p><strong>Description:</strong>{this.props.open.description} </p>
          {/*<button onClick={() => this.props.cancel(this.props.open.name)}>Cancel</button>*/}
        </div>
      </div>
    );
  }
}

export default BookVenue;