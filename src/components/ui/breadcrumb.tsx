import { Link } from 'react-router-dom'

interface Props {
  path: string
  label: string
}

export default function Breadcrumb({ path, label }: Props) {
  return (
    <nav className="row row--lg u-no-mb breadcrumb">
      <Link to={path} className="btn btn--arrow btn--arrow-left">
        {label}
      </Link>
    </nav>
  )
}
