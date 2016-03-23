module.exports = function assign(target, ...sources) {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      // If the target key has an object
      if (key in target && target[key] instanceof Object) {
        // and the source key is also an object
        if (source[key] instanceof Object) {
          // then merge them (source overwrites same keys).
          return assign(target[key], source[key]);
        }
      }
      target[key] = source[key];
    });
  });
  return target;
}

exports.merge = function merge(target, ...sources) {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      // If the target key has an object
      if (key in target && target[key] instanceof Object) {
        // and the source key is also an object
        if (source[key] instanceof Object) {
          // then merge them (source overwrites same keys).
          return merge(target[key], source[key]);
        }
        // If the source key is not an object, we don't overwrite the target object.
        return;
      }
      target[key] = source[key];
    });
  });
  return target;
}
