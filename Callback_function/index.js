
// console.log('This is a callback function example-1.')
// setTimeout(()=>{
//     console.log('This is a callback function example-2.')
// },5000)
// console.log('This is a callback function example-3.')




// this is a callback function example

const first =(a,b, callback)=>{
  setTimeout(()=>{
      console.log(a+b)
       callback()
  }, 4000)
   
}
const second=()=>{
    console.log('This is the second function called by the first function.')
} 

first(2,4, second)