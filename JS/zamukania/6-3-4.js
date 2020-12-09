function getFirst(){
  const param = 1;
  console.log(param, 'param in 1')
  console.log(param2, 'param2 in 1')
  console.log(param3, 'param3 in 1')
  return function() {
    const param2 = 2
    console.log(param, 'param in 2')
    console.log(param2, 'param2 in 2')
    console.log(param3, 'param3 in 2')
    return function () {
      const param3 = 3
      console.log(param, 'param in 3')
      console.log(param2, 'param2 in 3')
      console.log(param3, 'param3 in 3')
    }
  }
}

const getSecond = getFirst()
// function() {
//     const param2 = 2
//     console.log(param, 'param in 2')
//     console.log(param2, 'param2 in 2')
//     console.log(param3, 'param3 in 2')
//     return function () {
//       const param3 = 3
//       console.log(param, 'param in 3')
//       console.log(param2, 'param2 in 3')
//       console.log(param3, 'param3 in 3')
//     }
//   }

const getThird = getSecond()

// function () {
//       const param3 = 3
//       console.log(param, 'param in 3')
//       console.log(param2, 'param2 in 3')
//       console.log(param3, 'param3 in 3')
//     }

const getFourth = getThird()