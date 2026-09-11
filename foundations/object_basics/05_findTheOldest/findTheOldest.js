
const findTheOldest = function(people) {
    people.map(person => {
        person.yearOfDeath = !person.yearOfDeath ? (new Date()).getFullYear() : person.yearOfDeath;
        return person;
    })
   return people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
