import { useEffect, useState, useRef } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Breadcrumb from './ui/breadcrumb'
import Listing from './listing'
import ScrollToTop from './util/scrollToTop'
import Vacancy from './vacancy'
import Apply from './apply'

export default function App() {
  const [vacancies, setVacancies] = useState([])
  const wrapper = useRef(null)

  useEffect(() => {
    const socket = new WebSocket('wss://eris.dc-eris.co.uk/ws/v1/vacancies')

    socket.addEventListener('open', () => {
      socket.send('vacancyList')
    })

    socket.addEventListener('message', event => {
      const parsedMessage = JSON.parse(event.data)
      parsedMessage.vacancies && setVacancies(parsedMessage.vacancies)
    })

    return () => {
      socket.close()
    }
  }, [])

  return (
    <div ref={wrapper}>
      <HashRouter>
        <ScrollToTop target={wrapper} />
        <Switch>
          <Route
            path="/:vacancyId/apply"
            render={(props): JSX.Element => (
              <>
                <Breadcrumb
                  label="Back to vacancy details"
                  path={`/${props.match.params.vacancyId}`}
                />
                <Apply
                  vacancies={vacancies}
                  currentVacancy={props.match.params.vacancyId}
                />
              </>
            )}
          />
          <Route
            path="/:vacancyId"
            render={(props): JSX.Element => (
              <>
                <Breadcrumb label="See all vacancies" path="/" />
                <Vacancy
                  vacancies={vacancies}
                  currentVacancy={props.match.params.vacancyId}
                />
              </>
            )}
          />
          <Route path="/">
            <Listing vacancies={vacancies} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
  )
}
