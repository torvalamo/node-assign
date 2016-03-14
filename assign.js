module.exports = function() {
  return Array.prototype.reduce.call(arguments, (prev, cur) => {
    return assign(prev, cur)
  }, {})
}

function assign(to, from) {
  if (from instanceof Object) {
    Object.keys(from).forEach((key) => {
      if (from[key] instanceof Object && to[key] instanceof Object) {
        assign(to[key], from[key])
      } else {
        to[key] = from[key]
      }
    })
  }
  return to
}
