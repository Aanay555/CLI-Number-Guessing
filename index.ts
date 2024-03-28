#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// import chalkAnimation from "chalk-animation";


// generate computer random number
//take input from user
// after taking input campare user input and computer generated guess numbers
const RandomNumber = Math.floor(Math.random() * 6 +1);
console.log(chalk.blueBright((RandomNumber)));
    const result = await inquirer.prompt([
    {
        type: "number",
       name: "GuessUserNumber",
       message: "Please guess your number."
     },
    ]);
       if(result.GuessUserNumber === RandomNumber){
     console.log(chalk.bgRed("Great : You are right, for guesssing number."));
    }
        else {
           console.log(chalk.bgRed("Sorry : You are wrong, for guessing number."));
       }
       
        


