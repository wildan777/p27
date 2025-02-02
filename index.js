// setTimeout(function(){
//     console.log("function with no name")
// }, 5000)

// setTimeout(()=>{
//     console.log("arrow function ")
// }, 5000

// function greet(){
//     console.log("hello")
// }
// greet()








// let str1 = "Hello123";
// let regex = /\d/;
// console.log(regex.text(str1)); // Output: true

// // find and print number 
// const text = "my age is 14 My phone number 123456.";
// const regex2 = /\d+/g
// console.log(text.match(regex2)); // Output: ['14' , '123456'];




try{
    // Invaled JSON
    let InvaledJson = "{name: 'John'";
    JSON.parse(invaledJson);
} catch (error)  {
    console.log("hey Omar an error occured in ur code:"  ,  error.message);
}