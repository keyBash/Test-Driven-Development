let findTheOldest = function(people) {
    const oldestPerson = people.reduce((winner, person) => {
        if ((person.yearOfDeath - person.yearOfBirth) > (winner.yearOfDeath - winner.yearOfBirth)) {
            return person;
        } else if ((person.yearOfDeath - person.yearOfBirth) <= (winner.yearOfDeath - winner.yearOfBirth)) {
            return winner;
        }
    });
    return oldestPerson;
}


module.exports = findTheOldest;


// Working code from solutions

/* const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }; */
  