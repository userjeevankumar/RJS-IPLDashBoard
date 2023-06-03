// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchesData: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchData = await response.json()
    const updatedTeamsData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatchDetails: {
        umpires: fetchData.latest_match_details.umpires,
        result: fetchData.latest_match_details.result,
        manOfTheMatch: fetchData.latest_match_details.man_of_the_match,
        id: fetchData.latest_match_details.id,
        date: fetchData.latest_match_details.date,
        venue: fetchData.latest_match_details.venue,
        competingTeam: fetchData.latest_match_details.competing_team,
        competingTeamLogo: fetchData.latest_match_details.competing_team_logo,
        // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
        firstInning: fetchData.latest_match_details.first_inning,
        secondInnings: fetchData.latest_match_details.second_innings,
        matchStatus: fetchData.latest_match_details.match_status,
      },
      recentMatches: fetchData.recent_matches.map(recentMatches => ({
        umpires: recentMatches.umpires,
        result: recentMatches.result,
        manOfTheMatch: recentMatches.man_of_the_match,
        id: recentMatches.id,
        data: recentMatches.date,
        venue: recentMatches.venue,
        competingTeam: recentMatches.competing_team,
        competingTeamLogo: recentMatches.competing_team_logo,
        // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
        firstInnings: recentMatches.first_innings,
        secondInnings: recentMatches.second_innings,
        matchStatus: recentMatches.match_status,
      })),
    }
    this.setState({teamMatchesData: updatedTeamsData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTeamMatchDetails = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesData
    return (
      <div className="render_team_match_details">
        <img src={teamBannerUrl} alt="team banner" className="img-log" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderRecentMatchDetails()}
      </div>
    )
  }

  renderRecentMatchDetails = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    return (
      <div>
        <ul className="match_container">
          {recentMatches.map(eachMatch => (
            <MatchCard MatchData={eachMatch} key={eachMatch.key} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team_match_container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
