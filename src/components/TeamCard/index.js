import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="card-container">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </Link>
    </li>
  )
}

export default TeamCard
