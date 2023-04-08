import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamsMatchesData: {}, isLoading: true, bgClassName: ''}

  componentDidMount() {
    this.getTeamsData()
  }

  formattedData = data => ({
    id: data.id,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getTeamsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.formattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachData =>
        this.formattedData(eachData),
      ),
    }

    const bgColorClassName = `bg-color-${id}`

    this.setState({
      teamsMatchesData: updatedData,
      isLoading: false,
      bgClassName: bgColorClassName,
    })
  }

  renderTeamMatchesComponent = () => {
    const {teamsMatchesData, bgClassName} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamsMatchesData

    return (
      <div className={`team-matches-container ${bgClassName}`}>
        <div className="team-matches-page">
          <div className="team-banner">
            <img
              className="team-banner-img"
              src={teamBannerUrl}
              alt="team banner"
            />
          </div>
          <div className="latest-matches">
            <h1 className="latest-heading">Latest Matches</h1>
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              bgClassName={bgClassName}
            />
          </div>
          <ul className="match-card">
            {recentMatches.map(eachCard => (
              <MatchCard key={eachCard.id} cardDetails={eachCard} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div className="loader-spinner" data-testid="loader">
        <Loader type="Oval" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      this.renderTeamMatchesComponent()
    )
  }
}

export default TeamMatches
