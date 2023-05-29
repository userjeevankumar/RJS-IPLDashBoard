// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    iplTeamsData: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()
    const updateData = fetchData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamsData: updateData, isLoading: false})
  }

  renderLoader = () => (
    <div>
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderTeamsList = () => {
    const {iplTeamsData} = this.state
    return (
      <ul>
        {iplTeamsData.map(team => (
          <TeamCard key={team.id} iplTeamsData={team} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-logo-text">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="img-ipl-logo"
          />
          <h1 className="head">IPL Dashboard</h1>
          <div>{isLoading ? this.renderLoader() : this.renderTeamsList()}</div>
        </div>
      </div>
    )
  }
}

export default Home
