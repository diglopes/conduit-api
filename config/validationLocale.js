const yup = require('yup')

yup.setLocale({
  mixed: {
    default: 'Nao e valido',
    required: ({ path }) => `${path} e um campo obrigatorio`
  },
  string: {
    matches: ({ value, path }) => `o valor '${value}' em ${path} nao e valido`,
    min: ({ min, path }) => `${path} deve ter ao menos ${min} caracteres`,
    email: ({ path }) => `${path} deve ser um email valido`
  }
})
