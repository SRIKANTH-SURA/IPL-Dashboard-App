import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const updatedLatestMatchDetails = {
    id: latestMatchDetails.id,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedLatestMatchDetails

  return (
    <div className="latest-match-details">
      <div className="competingTeam-details-container">
        <div className="competingTeam-schedule-details">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="competingTeam-logo"
          src={competingTeamLogo}
          alt={competingTeam}
        />
      </div>
      <div className="innings-details">
        <h4>First Innings</h4>
        <p>{firstInnings}</p>
        <h4>Second Innings</h4>
        <p>{secondInnings}</p>
        <h4>Man Of The Match</h4>
        <p>{manOfTheMatch}</p>
        <h4>Umpires</h4>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
