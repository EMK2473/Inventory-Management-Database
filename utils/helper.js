module.exports = {
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