function getPersonData(lastName) {
  return function (name) {
    const result = `${lastName} ${name}`
    return result
  }
}

const getPotterInfo = getPersonData('Potter');
const getPetrovInfo = getPersonData('Petrov');
const getKonnorInfo = getPersonData('Konnor');
const getNalivaikoInfo = getPersonData('Nalivaiko');

// console.log(getPotterInfo, 'getPotterInfo')

const firstPersonKonnor = getKonnorInfo('John')
const secondPersonKonnor = getKonnorInfo('Sarra')

const firstPersonNalivaiko = getNalivaikoInfo('Bogdan')

const personNalivaiko = getPotterInfo('Harry')

console.log(firstPersonKonnor) // Konnor John
console.log(secondPersonKonnor) // Konnor Sarra
// console.log('-----------------')
console.log(firstPersonNalivaiko) // Nalivaiko Bogdan
// console.log('-----------------')
console.log(personNalivaiko) // Potter Harry
//
// console.log('-----------------')