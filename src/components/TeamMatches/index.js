import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamsMatchesData: {}, isLoading: false}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    // console.log(updatedData.recentMatches)

    this.setState({teamsMatchesData: updatedData, isLoading: false})
  }

  renderTeamMatchesComponent = () => {
    const {teamsMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamsMatchesData
    // console.log(latestMatchDetails)

    return (
      <div className="team-matches-container">
        <div className="team-banner">
          <img
            className="team-banner-img"
            src={teamBannerUrl}
            alt="team banner"
          />
        </div>
        <div className="latest-matches">
          <h1 className="latest-heading">Latest Matches</h1>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div className="loader-spinner" data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      this.renderTeamMatchesComponent()
    )
  }
}

export default TeamMatches
