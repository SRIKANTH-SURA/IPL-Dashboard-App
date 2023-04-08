import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  //   console.log(latestMatchDetails)

  const {
    id,
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
  } = latestMatchDetails

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
          alt={`latest match ${competingTeam}`}
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
