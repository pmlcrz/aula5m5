import readline from "readline";
import chalk  from "chalk";

 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cssProperties = [];

function prompt() {
   rl.question(chalk.yellow('digitar uma propriedade do CSS (ou SAIR pra finalizar): '), answer => {
     if (answer === 'sair') {
       console.log(chalk.green('propriedades do CSS ordenadas de A-Z:'));
       cssProperties.sort().forEach(property => console.log(chalk.blue(property)));
       rl.close();
     } else {
       cssProperties.push(answer);
       prompt();
     }
   });

}

prompt();
