interface Props {
  name: string
  required?: boolean
  label: string
  helpText?: string
  children: React.ReactChild
  error: string | null
  extraClasses?: string
  inlineLabel?: boolean
}

export default function FormItem({
  name,
  required,
  label,
  helpText,
  error,
  children,
  extraClasses,
  inlineLabel,
}: Props) {
  return (
    <div className={`form__element ${extraClasses ? extraClasses : ''}`}>
      <label htmlFor={name}>
        {inlineLabel && children}
        {label} {required && <span className="form__required">*</span>}
      </label>
      {!inlineLabel && children}
      {helpText && <span className="form__help">{helpText}</span>}
      {error ? <p className="form__error">{error}</p> : null}
    </div>
  )
}
