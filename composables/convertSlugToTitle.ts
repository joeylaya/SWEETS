export const convertSlugToTitle = (slug: string) => {
  slug = slug.replace(/([A-Z])/g, "-$1")
  let words = slug.split('-')
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    words[i] = word.charAt(0).toUpperCase() + word.slice(1)
  }

  let title = words.join(' ')
  if (title.charAt(-1) == '/') title = title.slice(0,-1)
  return title
}
