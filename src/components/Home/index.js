import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="img-container">
            <img
              className="ipl-img"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="top-heading">IPL Dashboard</h1>
          </div>
          <ul className="team-list-container">
            {isLoading ? (
              <div data-testid="loader" className="loader-container">
                <Loader type="Oval" color="#ffffff" height={50} />
              </div>
            ) : (
              teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
