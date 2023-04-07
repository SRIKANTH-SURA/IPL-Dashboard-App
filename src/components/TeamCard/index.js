import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="team-card">
      <Link className="team-card-link" to={`/team-matches/${id}`}>
        <img className="team-card-image" src={teamImageUrl} alt={id} />
        <h1 className="team-card-name">{name}</h1>
      </Link>
    </li>
  )
}

export default TeamCard
