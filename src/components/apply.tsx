import { tVacancy } from '../types'
import Loader from './ui/loader'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ApplicationForm from './applicationForm'

interface Props {
  vacancies: Array<tVacancy>
  currentVacancy: string
}

function Apply({ vacancies, currentVacancy }: Props) {
  const [customSources, setCustomSources] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const vacancy = vacancies.find(vacancy => vacancy.id === currentVacancy)

  useEffect(() => {
    // Get custom 'sources' from WP options page
    // fetch(`${window.location.origin}/wp-json/acf/v3/options/options/`)
    //   .then(res => res.json())
    //   .then(data => {
    //     const sources = data.acf.careers_application_sources.map(
    //       (customSource: { source: string }) => {
    //         return customSource.source
    //       }
    //     )

    //     setCustomSources(sources)
    //     setIsLoading(false)
    //   })

    // Example without access to WP API
    const sources = ['LinkedIn', 'GitHub', 'Other']
    setCustomSources(sources)
    setIsLoading(false)
  }, [])

  if (!vacancy || isLoading) return <Loader />

  return (
    <>
      <article className="m-vacancy-application embed">
        <section className="row row--med single-column u-no-mt">
          <h2 className="single-column__title">
            {vacancy.title} Application Form
          </h2>
          {submitted ? (
            <p>
              Thank you for your application.{' '}
              <Link to={`/${currentVacancy}`}>Back to vacancy page</Link> or{' '}
              <Link to="/">See all vacancies</Link>
            </p>
          ) : (
            <ApplicationForm
              customSources={customSources}
              setSubmitted={setSubmitted}
              currentVacancy={currentVacancy}
            />
          )}
        </section>
      </article>
    </>
  )
}

export default Apply
