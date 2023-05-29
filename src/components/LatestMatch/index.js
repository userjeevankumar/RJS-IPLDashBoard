// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInning,
      secondInnings,
    } = latestMatchDetails

    return (
      <div>
        <h1>Latest Match</h1>
        <div className="latest_match">
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`Latest match ${competingTeam}`}
            className="img-team-logo"
          />
          <div>
            <div>
              <p>First Innings</p>
              <p>{firstInning}</p>
            </div>
            <div>
              <p>Second Innings</p>
              <p>{secondInnings}</p>
            </div>
            <div>
              <p>Man of the Match</p>
              <p>{manOfTheMatch}</p>
            </div>
            <div>
              <p>Umpires</p>
              <p>{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
