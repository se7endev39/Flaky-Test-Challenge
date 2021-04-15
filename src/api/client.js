module.exports = {
  loadPeople: function() {
    return {
      then: function(cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.people || '[]'));
        }, Math.random() * 1000);
      }
    };
  },

  savePeople: function(people) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.people = JSON.stringify(people);
        return resolve({success: true});
      }, between(3500, 4500));
    });
  }
};

function between (min, max) {
  return Math.random() * (max - min) + min
}
