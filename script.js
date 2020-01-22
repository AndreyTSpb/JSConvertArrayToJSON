 //conver to JSON
 let arr = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);  

 let obj = {};
 
 //array to object
 arr.forEach((val, key)=>{
      obj[key] = val;
 });
 
 //object to json
 let json = JSON.stringify(obj);
 
 console.log(json);
