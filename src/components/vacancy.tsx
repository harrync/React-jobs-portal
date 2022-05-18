import { Link } from 'react-router-dom'
import { tVacancy } from '../types'
import Loader from './ui/loader'
import List from './ui/textList'

interface Props {
  vacancies: Array<tVacancy>
  currentVacancy: string
}

export default function Vacancy({ vacancies, currentVacancy }: Props) {
  const vacancy = vacancies.find(vacancy => vacancy.id === currentVacancy)

  if (!vacancy) return <Loader />

  const {
    title,
    location,
    longDescription,
    team,
    businessFunction,
    employmentType,
    jobExpectations,
    jobResponsibilities,
    id,
    candidatePortalURL,
  } = vacancy

  return (
    <article className="m-vacancy">
      <section className="row row--med single-column u-no-mt">
        <h2 className="single-column__title">{title}</h2>

        <ul className="m-vacancy__details">
          <li>
            <i className="fas fa-user-tag"></i> {businessFunction}
          </li>
          <li>
            <i className="fas fa-clock"></i> {employmentType}
          </li>
          <li>
            <i className="fas fa-users"></i> {team}
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> {location}
          </li>
        </ul>

        <div className="wysiwyg">
          <p>{longDescription}</p>
        </div>
      </section>

      <section className="background--grey row row--bleed">
        <div className="row row--lg two-columns">
          <div className="text wysiwyg">
            {jobExpectations && (
              <List title="What We’re Looking For" data={jobExpectations} />
            )}
          </div>

          <div className="text wysiwyg">
            {jobResponsibilities && (
              <List title="What You’ll Do" data={jobResponsibilities} />
            )}
          </div>
        </div>
      </section>

      <section className="row single-column apply-column">
        <Link to={`/${id}/apply`} className="btn">
          <span>Apply now</span>
        </Link>
      </section>
    </article>
  )
}
