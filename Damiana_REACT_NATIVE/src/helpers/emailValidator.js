export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email || email.length <= 0) return "Preencha os campos."
  if (!re.test(email)) return 'Email inválido!'
  return ''
}
