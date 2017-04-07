export default {
  email: (input) => {
    if (!input) return false
    const atSymbol = '@'
    const suffix = new RegExp(/\.[a-z]{2,4}\b/gi)
    return suffix.test(input) && input.includes(atSymbol)
  }
}
