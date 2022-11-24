export const convertSlugToTitle = (slug: string) => {
  let words = slug.split('-')
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    words[i] = word.charAt(0).toUpperCase() + word.slice(1)
  }

  return words.join(' ')
}
