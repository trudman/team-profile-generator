const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./src/renderHTML");

const teamArray = [];

function askQuestions() {
  return inquirer
    .prompt({
      type: "list",
      name: "team",
      message: "Please select the type of employee you would like to add to your team:",
      choices: ["Manager", "Engineer", "Intern", "Team Completed"],
    })
    .then(({ team }) => {
      if (team === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Please enter the name of the manager:",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter manager's name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "Please enter the ID number of the manager:",
              validate: (idInput) => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter manager's employee ID!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "email",
              message: "Please enter the email adress of the manager:",
              validate: (emailInput) => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter manager's email address!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "office",
              message: "Please enter the manager's office number:",
              validate: (officeInput) => {
                if (officeInput) {
                  return true;
                } else {
                  console.log("Please enter manager's office number!");
                  return false;
                }
              },
            },
          ])
          .then((data) => {
            const genManager = new Manager(data.name, data.id, data.email, data.office);
            teamArray.push(genManager);
            askQuestions();
          });
      } else if (team === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Please enter the name of the intern:",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter intern's name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "Please enter the id number of the intern:",
              validate: (idInput) => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter intern's ID number!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "email",
              message: "Please enter the email address of the intern:",
              validate: (emailInput) => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter intern's email address!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "school",
              message: "Please enter the school name that the intern attends:",
              validate: (schoolInput) => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter the intern's school name!");
                  return false;
                }
              },
            },
          ])
          .then((data) => {
            const newIntern = new Intern(data.name, data.id, data.email, data.school);
            teamArray.push(newIntern);
            askQuestions();
          });
      } else if (team === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Please enter the name of the engineer:",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter engineer's name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "Please enter the id numuber of the engineer:",
              validate: (idInput) => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter engineer's id number!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "email",
              message: "Please enter the email address of the engineer:",
              validate: (emailInput) => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter engineer's email address!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "github",
              message: "Please enter the GitHub username of the engineer:",
              validate: (githubInput) => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter engineer's GitHub username!");
                  return false;
                }
              },
            },
          ])
          .then((data) => {
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            teamArray.push(newEngineer);
            askQuestions();
          });
      } else {
        fs.writeFile("./dist/index.html", renderHTML(teamArray), (err) => {
          err ? console.error(err) : console.log("Team created successfully!");
        });
      }
    });
}

askQuestions();
