import * as Yup from 'yup'
import {
  NUMBERS_ONLY,
  FILE_SIZE,
  MESSAGE_FORMAT,
  MESSAGE_LARGE,
  MESSAGE_LONG,
  MESSAGE_REQUIRED,
  MESSAGE_SELECT_REQUIRED,
  MESSAGE_SHORT,
  NOTICE_OPTIONS,
  PHONE_REGEX,
  POSTCODE_REGEX,
  SALARY_OPTIONS,
  SUPPORTED_FORMATS,
} from './applyHelpers'

// Validation schema
export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, MESSAGE_SHORT)
    .max(50, MESSAGE_LONG)
    .required(MESSAGE_REQUIRED),
  surname: Yup.string()
    .min(2, MESSAGE_SHORT)
    .max(50, MESSAGE_LONG)
    .required(MESSAGE_REQUIRED),
  email: Yup.string().email('Invalid email').required(MESSAGE_REQUIRED),
  phone: Yup.string()
    .matches(PHONE_REGEX, 'Phone number is invalid')
    .required(MESSAGE_REQUIRED),
  currentPostcode: Yup.string().matches(POSTCODE_REGEX, 'Postcode is invalid'),
  currentSalary: Yup.string()
    .matches(NUMBERS_ONLY, 'Must just contain numbers')
    .required(MESSAGE_REQUIRED),
  salaryAspiration: Yup.string()
    .oneOf(SALARY_OPTIONS, MESSAGE_SELECT_REQUIRED)
    .required(MESSAGE_SELECT_REQUIRED),
  requiredDailyRate: Yup.string()
    .matches(NUMBERS_ONLY, 'Must just contain numbers')
    .notRequired(),
  referringEmployee: Yup.string().notRequired(),
  noticePeriod: Yup.string()
    .oneOf(NOTICE_OPTIONS, MESSAGE_SELECT_REQUIRED)
    .required(MESSAGE_SELECT_REQUIRED),
  sourceCDE: Yup.string()
    .notOneOf(['DEFAULT'], MESSAGE_SELECT_REQUIRED)
    .required(MESSAGE_SELECT_REQUIRED),
  workRight: Yup.boolean().required(
    'Please indicate your right to work in the UK'
  ),
  cv: Yup.mixed()
    .test(
      'fileSize',
      MESSAGE_LARGE,
      value => !value || (value && value.size <= FILE_SIZE)
    )
    .test(
      'FILE_FORMAT',
      MESSAGE_FORMAT,
      value => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    )
    .required(MESSAGE_REQUIRED),
  coveringLetter: Yup.string().nullable().notRequired(),
})
