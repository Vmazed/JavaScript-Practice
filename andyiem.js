// Variables
//let , const, var

//Example
// let a = 10
// console.log(`The initial value of a is: 
//if/else conditionals
//if: if this then do that
//if*(conditional)

//else is the code that will run if the if conditional is false
// else if <--- another if statement 

//function bar(age, name){
   // if(age>=21){
    //    return `You are old enough for the bar you can enter`
   // }else if(name===`Andy`){
   //     return `You know what, you can come in`
   // }{
   //     return `You are not old enough come back when you are`
   // }

//console.log(bar(18, `Andy`))

// loops
//for, while - that keeps going until the condition is met
// arrays [] - a list of items

// arrays are a lsit of item in no particular order.
// arrays can consist of strings and intergers

//const colors = [`red`,`blue`,`yellow`] /*the length of the colors array is 3*/
//console.log(colors[2])
// in order to access a specfic index in the array we have to count from 0. So here if went red it be colors[0]

// a for loop is a function or method that will loop through anything until the condition is met
// i <--- index
//for(let i = 0; i < colors.length; i++){
   //console.log(colors[i])
//}
// i is always changing, we start at 0 because that is where the loop begins
// for(let i = 0; i < something; i - 1)

//for(let i = 0; i <= 5; i ++){
    //console.log(i)
//}

//funciton fizzBuzz(num){
    // In this for loop we are starting at 1 and will
    // continue until we are less than or equal to num; and we will increment i by1
    //for(let i = 1; < num; i++){
        //if i is a dividen of 3 and 5 then it will print out fizzbuzz
        //if(i % 3 === 0 && i % 5 ===0){
            //console.log(`fizzBuzz`)
        //}
        // if i is divisible by 3 only then it will print out fizz
   // }else if (i % 3 ===0){
            //console.log(`fizz`)
        //}
        // if i is divisible by 5 only then it will print out buzz
    //}else if (i % 5 === 0){
      //  console.log(`buzz`)
        //if none of the conditions are met just print out i
        //else{
           // console.log(i)
       // }
    //}
    
    //const heroes = [`A-train`,`Maeve`,`Homelander`,`The-Deep`,`Black Noir`]

    //for(let i = 0; i <= heroes.length; i++){
        //console.log(heroes[i])
   // }

   function superpowers(hero){
    const aHero = hero.toLowerCase()
    if(hero === 'A-train'){
        return 'He has super speed'
    } else if(aHero === 'Maeve'){
        return 'she has super strength'
    } else if(aHero === 'Homelander'){
        return 'He has super strength, flight, and laser beams'
    } else if(aHero === 'the-Deep'){
        return 'he talks to fish'
    } else if(aHero === 'blacknoir'){
        return 'To be honest we dont know'
    } else{
        return 'We dont have info on that hero'
    }
    
   }
   console.log(superpowers(`blacknoIR`))




