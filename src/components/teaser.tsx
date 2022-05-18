import { Link } from 'react-router-dom'
import { tVacancy } from '../types'

interface Props {
  vacancy: tVacancy
}
export default function Teaser({ vacancy }: Props) {
  const { id, title, employmentType } = vacancy

  return (
    <Link to={id} className="a-vacancy-teaser">
      <span>{employmentType}</span>
      <h3 className="h5 u-no-mb">{title}</h3>
    </Link>
  )
}
