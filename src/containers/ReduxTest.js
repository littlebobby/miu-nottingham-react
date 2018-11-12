import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PLUS_ONE, plusOne } from '../store/actions'

class ReduxTest extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <p>currently there are</p>
        <span>{this.props.number.count}</span>
        <button onClick={this.props.plusOneHandler}>Plus 1</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    number: state.count
  }
} 

// const mapDispatchToProps = (dispatch) => {
//   return {
//     plusOneHandler: () => dispatch({type: PLUS_ONE})
//   }
// }

export default connect(mapStateToProps, { plusOneHandler: plusOne })(ReduxTest)