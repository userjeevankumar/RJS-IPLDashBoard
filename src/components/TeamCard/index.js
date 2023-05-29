// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {iplTeamsData} = this.props
    const {name, id, teamImageUrl} = iplTeamsData
    return (
      <Link to={`team-matches/${id}`}>
        <li className="logo-name-container">
          <img src={teamImageUrl} alt={name} className="ipl-img-logo" />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
