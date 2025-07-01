// pending, resolved, rejected

//const willmarry= true;

// new Promise((resolved, rejected)=>{
// setTimeout(()=>{
// if(willmarry){
//     resolved('I will marry you. Success...')
// }else{
//     rejected('I will not marry you. Sorry...')
// }
// }, 2000)
// }).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })




const willfriend = false;

function willbefriend() {
  const befriend = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willfriend) {
        resolve("I will be your friend. Success...");
      } else {
        reject("I will not be your friend. Sorry...");
      }
    }, 2000);
  });
  return befriend;
}

willbefriend()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
