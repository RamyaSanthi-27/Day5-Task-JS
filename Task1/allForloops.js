//1. For the given JSON iterate over all for loops(for, for in, for of, forEach)
const jsonData = {
    "name": "Ramya",
    "age" : 30,
    "city": "Chennai"
  };
  
  const jsonArray = ["JavaScript","HTML","CSS"];
  
   // For - in loop
  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      const value = jsonData[key];
      console.log(key , value);
    }
  }
  
  // For Loop
  for (let i = 0; i < jsonArray.length; i++) {
    const element = jsonArray[i];
    console.log(element);
    }
    
    // For- of loop
  for (const element1 of jsonArray) {
    console.log(element1);
  }
  
  //ForEach loop
  jsonArray.forEach((element2) => {
    console.log(element2);
  });
  //output:
//name Ramya
//age 30
//city Chennai
//JavaScript
//HTML
//CSS
//JavaScript
//HTML
//CSS
//JavaScript
//HTML
//CSS