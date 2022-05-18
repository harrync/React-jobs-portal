interface Props {
  title: string
  data: string
}

export default function TextList({ title, data }: Props) {
  const listItems = data.split(';')

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
