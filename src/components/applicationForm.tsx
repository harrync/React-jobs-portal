import { Field, Form, Formik } from 'formik'
import FormItem from './ui/formItem'
import {
  MESSAGE_NUMBERS,
  NOTICE_OPTIONS,
  SALARY_OPTIONS,
} from './util/applyHelpers'
import { SignupSchema } from './util/applySchema'

interface Props {
  currentVacancy: string
  customSources: string[]
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ApplicationForm({
  currentVacancy,
  customSources,
  setSubmitted,
}: Props) {
  return (
    <>
      <p>
        <span className="form__required">*</span> - Required field
      </p>
      <Formik
        initialValues={{
          vacancyId: currentVacancy,
          firstName: '',
          surname: '',
          email: '',
          phone: '',
          currentPostcode: '',
          currentSalary: '',
          salaryAspiration: '',
          noticePeriod: '',
          requiredDailyRate: '',
          cv: null,
          coveringLetter: '',
          workRight: '',
          sourceCDE: '',
          sourceOther: '',
          referringEmployee: '',
          // currentSalary: '10',
          // currentPostcode: 'PL253DJ',
          // sourceCDE: 'LinkedIn',
          // workRight: 'true',
          // phone: '0123456789',
          // coveringLetter: 'coveringLetter',
          // cv: null,
          // vacancyId: currentVacancy,
          // salaryAspiration: '< £20k',
          // noticePeriod: 'Immediate',
          // requiredDailyRate: '10',
          // surname: 'asd',
          // firstName: 'test',
          // email: 'text@example.com',
          // referringEmployee: 'asd',
          // sourceOther: 'Other',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData()

          // Generate formData object
          let key: keyof typeof values
          for (key in values) {
            const value = values[key] as string

            if (key === 'sourceOther') {
              break
            }

            // If 'other' chosen in 'sourceCDE', use 'sourceOther' field
            if (key === 'sourceCDE' && values.sourceCDE === 'Other') {
              formData.append(key, values.sourceOther ? values.sourceOther : '')
            } else {
              formData.append(key, value ? value : '')
            }
          }

          // Debug formdata
          // for (let property of formData.entries()) {
          //   console.log(property[0], property[1]);
          // }

          // Submit the form
          // fetch('API.url', {
          //   method: 'POST',
          //   body: formData,
          // })
          //   .then(function (res) {
          //     return res.text()
          //   })
          //   .then(function (data) {
          //     console.log(data)

          //     setSubmitting(false)
          //     setSubmitted(true)
          //   })

          alert('Form submitted')
          setSubmitting(false)
          setSubmitted(true)
        }}
      >
        {({ errors, touched, isSubmitting, setFieldValue, values }) => (
          <Form>
            <div
              className={`grid grid--2 ${
                isSubmitting ? 'form__submitting' : ''
              }`}
            >
              <FormItem
                required
                name="firstName"
                label="First Name"
                error={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : null
                }
              >
                <Field type="text" id="firstName" name="firstName" required />
              </FormItem>

              <FormItem
                required
                name="surname"
                label="Surname"
                error={
                  errors.surname && touched.surname ? errors.surname : null
                }
              >
                <Field type="text" id="surname" name="surname" required />
              </FormItem>

              <FormItem
                required
                name="email"
                label="Email"
                error={errors.email && touched.email ? errors.email : null}
              >
                <Field type="email" id="email" name="email" required />
              </FormItem>

              <FormItem
                required
                name="phone"
                label="Contact number"
                error={errors.phone && touched.phone ? errors.phone : null}
              >
                <Field type="tel" id="phone" name="phone" required />
              </FormItem>

              <FormItem
                name="currentPostcode"
                label="Postcode"
                error={
                  errors.currentPostcode && touched.currentPostcode
                    ? errors.currentPostcode
                    : null
                }
              >
                <Field
                  type="text"
                  id="currentPostcode"
                  name="currentPostcode"
                />
              </FormItem>

              <FormItem
                required
                name="currentSalary"
                label="Current salary (£)"
                helpText={MESSAGE_NUMBERS}
                error={
                  errors.currentSalary && touched.currentSalary
                    ? errors.currentSalary
                    : null
                }
              >
                <Field
                  type="text"
                  name="currentSalary"
                  id="currentSalary"
                  required
                />
              </FormItem>

              <FormItem
                required
                name="salaryAspiration"
                label="Salary aspiration"
                error={
                  errors.salaryAspiration && touched.salaryAspiration
                    ? errors.salaryAspiration
                    : null
                }
              >
                <Field
                  as="select"
                  name="salaryAspiration"
                  id="salaryAspiration"
                  required
                >
                  <option value="DEFAULT">Choose one</option>
                  {SALARY_OPTIONS.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </FormItem>

              <FormItem
                name="requiredDailyRate"
                label="Required daily rate (£)"
                helpText={MESSAGE_NUMBERS}
                error={
                  errors.requiredDailyRate && touched.requiredDailyRate
                    ? errors.requiredDailyRate
                    : null
                }
              >
                <Field
                  type="text"
                  name="requiredDailyRate"
                  id="requiredDailyRate"
                />
              </FormItem>

              <FormItem
                required
                name="noticePeriod"
                label="Notice period"
                error={
                  errors.noticePeriod && touched.noticePeriod
                    ? errors.noticePeriod
                    : null
                }
              >
                <Field
                  as="select"
                  name="noticePeriod"
                  id="noticePeriod"
                  required
                >
                  <option value="DEFAULT">Choose one</option>
                  {NOTICE_OPTIONS.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </FormItem>

              <FormItem
                required
                name="cv"
                label="Upload CV"
                error={errors.cv && touched.cv ? errors.cv : null}
              >
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  onChange={e => {
                    setFieldValue('cv', e.currentTarget!.files![0])
                  }}
                />
              </FormItem>

              <FormItem
                name="coveringLetter"
                label="Covering letter"
                extraClasses="form__fullwidth"
                error={
                  errors.coveringLetter && touched.coveringLetter
                    ? errors.coveringLetter
                    : null
                }
              >
                <Field
                  type="text"
                  name="coveringLetter"
                  id="coveringLetter"
                  component="textarea"
                />
              </FormItem>

              <FormItem
                required
                name="sourceCDE"
                label="How did you hear about this role?"
                error={
                  errors.sourceCDE && touched.sourceCDE
                    ? errors.sourceCDE
                    : null
                }
              >
                <Field as="select" name="sourceCDE" id="sourceCDE" required>
                  <option value="DEFAULT">Choose one</option>
                  {customSources.map((option: string, i: number) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </FormItem>

              {values.sourceCDE === 'Referral' && (
                <FormItem
                  name="referringEmployee"
                  label="Referring Employee"
                  error={
                    errors.referringEmployee && touched.referringEmployee
                      ? errors.referringEmployee
                      : null
                  }
                >
                  <Field
                    type="text"
                    name="referringEmployee"
                    id="referringEmployee"
                  />
                </FormItem>
              )}

              {values.sourceCDE === 'Other' && (
                <FormItem
                  name="sourceOther"
                  label="Other source"
                  error={
                    errors.sourceOther && touched.sourceOther
                      ? errors.sourceOther
                      : null
                  }
                >
                  <Field type="text" name="sourceOther" id="sourceOther" />
                </FormItem>
              )}

              <FormItem
                required
                name="workRight"
                label="You have right to work in the UK"
                error={
                  errors.workRight && touched.workRight
                    ? errors.workRight
                    : null
                }
                extraClasses="form__fullwidth"
                inlineLabel
              >
                <Field
                  type="checkbox"
                  name="workRight"
                  id="workRight"
                  required
                />
              </FormItem>

              <div className="form__fullwidth form__submit">
                <button type="submit" className="btn" disabled={isSubmitting}>
                  <span>
                    {isSubmitting ? 'Submitting' : 'Submit application'}
                  </span>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
