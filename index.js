#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import wrap from "text-wrap";

const createBox = () => {
    const name = chalk.magenta(
      chalk.bold(
        "I am Parthiba Mukhopadhyay, your digital wizard crafting wonders in the dark."
      )
    );
    const role = gradient.rainbow(
      "I work with pixels, components and my heart to develop amazing websites for you"
    );
    const github =
      chalk.white("Github: ") + chalk.italic(gradient.fruit("https://github.com/Parthiba-Mukhopadhyay"));
    const linkedin =
      chalk.white("LinkedIn: ") +
      chalk.italic(gradient.fruit("https://www.linkedin.com/in/parthiba-mukhopadhyay-19651b217"));
    const check = chalk.white(chalk.bold("Check me out on:"));
    const connect =
      chalk.white(chalk.bold("Connect with me @ ")) +
      gradient.cristal("meparthiba@gmail.com");
  
    const boxContent = `
  ${name}
  ${role}
  
  ${check}
  - ${github}
  - ${linkedin}
  
  ${connect}
  `;
  
    const wrappedBox = wrap(boxContent, { width: 100, indentation: "  " });
  
    const box = `
  ╔══════════════════════════════════════════════════════════════════════════════╗
  ${wrappedBox}
  ╚══════════════════════════════════════════════════════════════════════════════╝
  `;
  
    console.log(box);
  };
  
  
// Function to log your details in the terminal
function logDetails() {
    inquirer
  .prompt([
    {
      name: "name",
      message: "What is your name?",
      default: "xyz",
    },
  ])
  .then((answers) => {
    const title = "Hello " + answers.name;

    figlet(title, (err, data) => {
      console.log(gradient.pastel(data));
      createBox();
    });
  });

  }
  logDetails();

