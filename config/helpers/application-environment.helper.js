module.exports.applicationEnvironment = (environment) => {
  return Object.keys(environment).reduce((accumulator, current) => {
      if (current.startsWith('VUE_APP_')) {
        return {
          ...accumulator,
          [current]: environment[current],
        };
      }
      return accumulator;
    }, {});
}
