module.exports = {
  withInRange: function(a,b) {
    const lowerBound =  b - (b * 0.2);
    const upperBound = b + (b * 0.2)
    return a >= lowerBound && a <= upperBound;
  },
  critHigh: function(a,b){
    return (((a*.3) + a) < b)
  },
  critLow: function (a,b) {
    return ((a*.3) > b)
  },
  dif: function (a,b) {
    return a - b
  },
    eq: function (a,b) {
      return a===b
    },
    lt: function (a,b){
      return a < b
    },
    gt: function (a,b){
      return a > b
    },
    format_time: (date) => {
      return date.toLocaleTimeString();
      },
    format_date: (timestamp) => {
      const date = new Date(timestamp);
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month + 1}/${day}/${year}`;
      },
    };