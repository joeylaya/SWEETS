export const convertCamelToKebab = (camel: string) => {
  return camel.replace(/([A-Z])/g, "-$1").toLowerCase()
}
