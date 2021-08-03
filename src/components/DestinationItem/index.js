import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails

    return (
      <li className="destination-card-container">
        <img src={imgUrl} className="destination-pic" alt="destination-pic" />
        <p className="destination-name"> {name} </p>
      </li>
    )
  }
}

export default DestinationItem
