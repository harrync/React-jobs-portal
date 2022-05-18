import { tVacancy } from '../types'
import Teaser from './teaser'
import Loader from './ui/loader'

interface Props {
  vacancies: Array<tVacancy>
}

export default function Listing({ vacancies }: Props) {
  if (!vacancies.length) return <Loader />

  const categories = Array.from(
    new Set(
      vacancies.map(item => {
        return item.category
      })
    )
  )

  const vacanciesByCategory = categories.map((category, i) => {
    const categoryVacancies = vacancies.filter(
      item => item.category === category
    )

    return (
      <div key={i} className="row row--lg">
        <h2 className="h4 temp">{category}</h2>

        <div className="o-vacancies__list grid grid--sm grid--3">
          {categoryVacancies.map(vacancy => (
            <Teaser key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
      </div>
    )
  })

  return <div className="o-vacancies">{vacanciesByCategory}</div>
}
