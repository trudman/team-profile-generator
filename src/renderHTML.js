const teamCards = (team) => {
  const managerCard = (manager) => {
    return `
    <div class="card text-dark bg-light mb-3 employee-card" style="max-width: 18rem;">
      <div class="card-header">
        <h4>${manager.getName()}</h4>
      </div>
      <div class="card-body">
        <h5 class="card-title">${manager.getRole()}</h5>
        <ul>
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
          <li class="list-group-item">
            Email: <a href="mailto:">${manager.getEmail()}</a>
          </li>
        </ul>
      </div>
    </div>`;
  };
  const internCard = (intern) => {
    return `
    <div class="card text-dark bg-light mb-3 employee-card" style="max-width: 18rem;">
      <div class="card-header">
        <h4>${intern.getName()}</h4>
      </div>
      <div class="card-body">
        <h5 class="card-title">${intern.getRole()}</h5>
        <ul>
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
          <li class="list-group-item">
            Email: <a href="mailto:">${intern.getEmail()}</a>
          </li>
        </ul>
      </div>
    </div>`;
  };
  const engineerCard = (engineer) => {
    return ` <div class="card text-dark bg-light mb-3 employee-card" style="max-width: 18rem;">
    <div class="card-header">
      <h4>${engineer.getName()}</h4>
    </div>
    <div class="card-body">
      <h5 class="card-title">${engineer.getRole()}</h5>
      <ul>
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        <li class="list-group-item">
          Email: <a href="mailto:">${engineer.getEmail()}</a>
        </li>
      </ul>
    </div>
  </div>`;
  };

  const teamHTML = [];

  teamHTML.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
      .join("")
  );
  teamHTML.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
      .join("")
  );
  teamHTML.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
  );

  return teamHTML.join("");
};

module.exports = (team) => {
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
        <title>My Team</title>
      </head>
      <body>
        <div class="container-fluid">
            <div class="jumbotron">
              <h1 class= "text-center">My Team</h1>
              </div>
              <div class="container row">
                ${teamCards(team)}
              </div>
              </div>
      </body>
    </html>`;
};
