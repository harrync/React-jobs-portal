// Form validation helpers
export const PHONE_REGEX =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

export const POSTCODE_REGEX =
  /^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/

export const NUMBERS_ONLY = /^[1-9][0-9]{0,6}(?:$|(?:\\.[0-9]{2}$))/

export const FILE_SIZE = 3500000

export const SUPPORTED_FORMATS = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
  'application/msword',
]

// Select field options
export const SALARY_OPTIONS = [
  '< £20k',
  '£20k - £25k',
  '£25k - £30k',
  '£30k - £35k',
  '£35k - £40k',
  '£40k - £50k',
  '£50k - £60k',
  '£60k - £70k',
  '£70k - £80k',
  '£80k - £90k',
  '£90k - £100k',
  '£100k - £110k',
  '£110k - £120k',
  '£120k - £130k',
  '£130k - £140k',
  '£140k - £150k',
  '> £150k',
]

export const NOTICE_OPTIONS = [
  'Immediate',
  '<= 2 weeks',
  '<= 1 month',
  '<= 2 months',
  '> 3 months',
]

// Error messages
export const MESSAGE_SHORT = 'Should be more than 2 characters'
export const MESSAGE_LONG = 'Should be less than 50 characters'
export const MESSAGE_LARGE = 'The file is too large'
export const MESSAGE_FORMAT = 'Please upload in .doc, .docx or .pdf format'
export const MESSAGE_SELECT_REQUIRED = 'Please select an option'
export const MESSAGE_REQUIRED = 'This field is required'
export const MESSAGE_NUMBERS = 'Please enter numbers only'
