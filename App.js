const array = ["one", "two", "three"]
array.forEach((item, index,arr)=> {
  console.log(item, index,arr);
});

const array = ["one", "two", "three"]
array.forEach((item, index,arr)=> {
  console.log(item, index,arr);
});


array.forEach((key,item,arr)=>{
    console.log(key);
    console.log(item);
    console.log(arr);
    console.log(item, index);
  })

  // JavaScript Variables example
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1); //3 3 3
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1); //0 1 2
  }
