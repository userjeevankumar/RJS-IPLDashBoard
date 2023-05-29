// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {MatchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = MatchData

    return (
      <li className={`match-card${matchStatus}`}>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-logo"
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
