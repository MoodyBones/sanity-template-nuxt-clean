import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'codeInput',
  title: 'Code Input',
  type: 'code',
  options: {
    language: 'javascript',
    languageAlternatives: [
      {title: 'Javascript', value: 'javascript'},
      {title: 'HTML', value: 'html'},
      {title: 'CSS', value: 'css'},
      {title: 'shell', value: 'sh'},
    ],
    withFilename: true,
  },
})
