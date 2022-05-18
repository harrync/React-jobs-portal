import { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

// TODO - target type
interface Props {
  history: RouteComponentProps['history']
  target: any
}

function ScrollToTop({ history, target }: any) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      target.current.scrollIntoView({ behavior: 'smooth', inline: 'start' })
    })
    return () => {
      unlisten()
    }
  }, [history, target])

  return null
}

export default withRouter(ScrollToTop)
