import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = cardDetails
  const colorClassName = matchStatus === 'Won' ? 'won-color' : 'loss-color'
  return (
    <li className="card-container">
      <img
        className="card-img"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name">{competingTeam}</p>
      <p className="match-results">{result}</p>
      <p className={`match-status ${colorClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
