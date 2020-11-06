export default function(doc) {

  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'intro') {
    return "/"
  }

  if (doc.type === 'blog') {
    return "/blog/" + doc.uid
  }

  if (doc.type === 'praana') {
    return '/praana/'
  }

  if (doc.type === 'contact') {
    return '/contact/'
  }

  return "/not-found";

}
