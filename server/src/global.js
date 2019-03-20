global.document = {
  getElementsByTagName: (tag) => {
    return tag
  },
  cookie: {
    split: (delim) => {
      console.log(` trying to split with  ${delim}`)
    }
  },
  location: {
    href: 'localhost'
  }
}