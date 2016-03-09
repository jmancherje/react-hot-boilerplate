import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFourSquareVenues } from '../actions/index';

class ActivitiesList extends Component {
  render() {
    return (
      <div>
        get activities in SF:
        <button onClick={this.props.fetchFourSquareVenues}>Fetch</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { activities: state.activities.all }
}

export default connect(mapStateToProps, { fetchFourSquareVenues })(ActivitiesList)